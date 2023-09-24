// TODO fix dissables
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

export class Avatar extends Block {
  constructor() {
    super();
  }

  protected render(): string {
    return `
            <div class="profile-avatar"></div>
        `;
  }
}
