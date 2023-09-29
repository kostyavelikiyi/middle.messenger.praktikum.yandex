import Block from '../../core/Block';

export class ErrorLine extends Block {
  protected render(): string {
    return `
            <div class="input-text-error">{{error}}</div>
        `;
  }
}
