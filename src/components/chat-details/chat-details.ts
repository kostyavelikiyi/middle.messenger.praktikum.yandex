/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

export class ChatDetails extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
          
          <div class="chat_details">
            <div class="text_stub text_min_light">Выберите чат чтобы отправить сообщение</div>
          </div>
        `;
  }
}
