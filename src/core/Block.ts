// TODO fix all disables
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/prefer-readonly */
import EventBus from './EventBus';
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

// Нельзя создавать экземпляр данного класса
class Block<Props extends Record<string, any> = unknown> {
  [x: string]: any;
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = nanoid(6);
  protected props: Props;
  protected refs: Record<string, Block> = {};
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsWithChildren: Props) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: Props) {
    const props: Record<string, Props> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  _removeEvents() {
    const { events = {} } = this.props as Props & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _addEvents() {
    const { events = {} } = this.props as Props & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) =>
      child.dispatchComponentDidMount(),
    );
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: Props, _newProps: Props) {
    return true;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.compile(this.render(), this.props);

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._removeEvents();

    this._addEvents();
  }

  private compile(template: string, context: any) {
    const contextAndStubs = { ...context, __refs: this.refs };

    const html = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }: any) => {
      embed(temp.content);
    });

    return temp.content;
  }

  protected render(): string {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: Props) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };

        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
