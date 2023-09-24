import Block from '../../core/Block';

export class ChatPage extends Block {
  constructor() {
    super({
      // TODO доделать интерактивное открытие
      openChat: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(this);
        const chat-details = document.getElementById('chat-details');
        console.log(chat-details);
      },
    });
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
                {{#each (message_preview_mock)}}
                     {{{ ChatPreview name=this.name message=this.message time=this.time count=this.count onClick=@root.openChat }}}
                {{/each}}
            </div>
        </div>
        {{{ ChatDetails }}}
    </div>
        `;
  }
}
