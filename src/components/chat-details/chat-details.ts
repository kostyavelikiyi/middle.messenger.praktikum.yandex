/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

export class ChatDetails extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
            <div class="chat_details">
              <header class="chat_header">
                <div class="chat_header_left">
                  <div class="chat_avatar"></div>
                  <div>Костя</div>
                </div>
                <div class="dots"></div>
              </header>
              <div class="chat_content">
                <div class="day_container">
                  <div class="text_min_light text_stub">
                    <div class="date">
                      19 июля
                    </div></div>
                  <div class="message_container message_container_left">
                    <div class="message_text_other">Привет! Смотри, тут всплыл интересный
                      кусок лунной космической истории — НАСА в какой-то момент попросила
                      Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                      знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
                      тушки этих камер все еще находятся на поверхности Луны, так как
                      астронавты с собой забрали только кассеты с пленкой. Хассельблад в
                      итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету
                      они так никогда и не попали. Всего их было произведено 25 штук, одну
                      из них недавно продали на аукционе за 45000 евро.</div>

                  </div>
                  <div class="message_container message_container_left">
                    <img src="../../assets/SWC.png" alt="" />
                  </div>
                  <div class="message_container message_container_right">
                    <div class="message_text_my">Круто!</div>
                  </div>
                  <div class="message_container message_container_left">
                    <div class="message_text_other">Привет! Смотри, тут всплыл интересный
                      кусок лунной космической истории — НАСА в какой-то момент попросила
                      Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                      знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
                      тушки этих камер все еще находятся на поверхности Луны, так как
                      астронавты с собой забрали только кассеты с пленкой. Хассельблад в
                      итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету
                      они так никогда и не попали. Всего их было произведено 25 штук, одну
                      из них недавно продали на аукционе за 45000 евро.</div>

                  </div>
                  <div class="message_container message_container_left">
                    <img src="../../assets/SWC.png" alt="" />
                  </div>
                  <div class="message_container message_container_right">
                    <div class="message_text_my">Круто!</div>
                  </div>
                </div>

              </div>
              <footer> Footer </footer>
            </div>

        `;
  }
}
