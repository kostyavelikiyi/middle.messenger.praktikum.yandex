/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

interface InputProps {
  onBlur: () => void;
  classes: string;
  placeholder: string;
  name: string;
  events: {
    blur: () => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
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
