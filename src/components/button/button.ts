/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

interface IProps {
  type: 'primary' | 'link' | 'link_red';
  label: string;
  page: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  protected render(): string {
    const { type, label, page } = this.props;
    return `
            <button type="button" class="button button-${type}" ${
              page ? `page="${page}"` : ''
            }>
                ${label}
            </button>
        `;
  }
}
