/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Block from '../../core/Block';

export class InputField extends Block {
  constructor(props: any) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  public value() {
    if (!this.validate()) {
      return false;
    }
    return (<HTMLInputElement>this.refs.input!.element!).value;
  }

  private validate() {
    const value = (<HTMLInputElement>this.refs.input!.element!).value;
    const error = this.props.validate?.(value);
    if (error) {
      this.refs.errorLine.setProps({ error });
      return false;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return true;
  }

  protected render(): string {
    return `
            <div class="input {{#if error}}input-error{{/if}}" >
                <label class="input-container">
                    {{{ Input
                        classes="input-element"
                        ref="input"
                        onBlur=onBlur
                    }}}
                    <div class="input-label">{{label}}</div>
                </label>
                {{{ ErrorLine error=error ref="errorLine"}}}
            </div>
        `;
  }
}
