/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

interface IProps {
  name: string;
  message: string;
  time: string;
  count: number;
  onClick: () => void;
}

export class ChatPreview extends Block {
  constructor(props: IProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => {}),
    };
  }

  protected render(): string {
    const { name, message, time, count } = this.props;
    return `
                <li>
                <div class="chat-preview">
                    <div class="chat-avatar">
                    </div>
                    <div class="chat-body">
                    <div class="chat-header">${name}</div>
                    <div class="chat_message text-min-light">${message}</div>
                    </div>
                    <div class="chat-sidebar">
                    <div class="chat_time text-min-light">${time}</div>
                    <div class="chat_status message-counter">${count}</div>
                    </div>
                </div>
                </li>
        `;
  }
}
