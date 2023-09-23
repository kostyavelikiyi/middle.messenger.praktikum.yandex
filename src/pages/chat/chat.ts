import Block from '../../core/Block';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
    <!-- доделать во второом спринте-->
    <div class="flex-container">
        <div class="aside">
            <div>
                <div class="profile">
                <div></div>
                <div>
                  {{{ Button label="Профиль" type="link_grey" page="profile" }}}
                </div>
                    
                </div>
                <div>
                    <input type="text" class="search" placeholder="Search"></input>
                </div>
                     {{> ChatPreview}}
            </div>
        </div>
        <div class="chat_details">
            <div class="text_stub text_min_light">Выберите чат чтобы отправить сообщение</div>
        </div>
    </div>
        `;
  }
}
