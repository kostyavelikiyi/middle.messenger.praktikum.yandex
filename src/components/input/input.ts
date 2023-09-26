/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

interface IProps {
  onBlur: () => void;
  classes: string;
  placeholder: string;
  name: string;
}

export class Input extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur || (() => {}),
      },
    });
  }

  protected render(): string {
    const { classes, placeholder, name } = this.props;
    return `
            <input
                class="${classes}"
                placeholder="${placeholder || ''}"
                ref="input"
                name="${name}"
            />
        `;
  }
}
