/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

export class ChatDetails extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
            <div class="chat-details">
              <header class="chat-header">
                <div class="chat-header-left">
                  <div class="chat-avatar"></div>
                  <div>Костя</div>
                </div>
                <div class="dots"></div>
              </header>
              <div class="chat-content">
                <div class="day-container">
                  <div class="text-min-light text-stub">
                    <div class="date">
                      19 июля
                    </div></div>
                  <div class="message-container message-container-left">
                    <div class="message-text-other">Привет! Смотри, тут всплыл интересный
                      кусок лунной космической истории — НАСА в какой-то момент попросила
                      Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                      знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
                      тушки этих камер все еще находятся на поверхности Луны, так как
                      астронавты с собой забрали только кассеты с пленкой. Хассельблад в
                      итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету
                      они так никогда и не попали. Всего их было произведено 25 штук, одну
                      из них недавно продали на аукционе за 45000 евро.</div>

                  </div>
                  <div class="message-container message-container-left">
                    <img src="../../assets/SWC.png" alt="" />
                  </div>
                  <div class="message-container message-container-right">
                    <div class="message-text-my">Круто!</div>
                  </div>
                  <div class="message-container message-container-left">
                    <div class="message-text-other">Привет! Смотри, тут всплыл интересный
                      кусок лунной космической истории — НАСА в какой-то момент попросила
                      Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                      знаем что астронавты летали с моделью 500 EL — и к слову говоря, все
                      тушки этих камер все еще находятся на поверхности Луны, так как
                      астронавты с собой забрали только кассеты с пленкой. Хассельблад в
                      итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету
                      они так никогда и не попали. Всего их было произведено 25 штук, одну
                      из них недавно продали на аукционе за 45000 евро.</div>

                  </div>
                  <div class="message-container message-container-left">
                    <img src="../../assets/SWC.png" alt="" />
                  </div>
                  <div class="message-container message-container-right">
                    <div class="message-text-my">Круто!</div>
                  </div>
                </div>

              </div>
              <footer> Footer </footer>
            </div>

        `;
  }
}
