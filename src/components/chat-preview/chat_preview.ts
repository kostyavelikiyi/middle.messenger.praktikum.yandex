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
                <div class="chat_preview">
                    <div class="chat_avatar">
                    </div>
                    <div class="chat_body">
                    <div class="chat_header">${name}</div>
                    <div class="chat_message text_min_light">${message}</div>
                    </div>
                    <div class="chat_sidebar">
                    <div class="chat_time text_min_light">${time}</div>
                    <div class="chat_status message_counter">${count}</div>
                    </div>
                </div>
                </li>
        `;
  }
}
