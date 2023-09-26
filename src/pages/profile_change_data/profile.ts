import Block from '../../core/Block';
import validateUtils from '../../utils/validate';

export class ProfileChangeDataPage extends Block {
  constructor() {
    super({
      validate: {
        email: validateUtils.email,
        login: validateUtils.login,
        name: validateUtils.name,
        phone: validateUtils.phone,
      },
    });
  }

  protected render(): string {
    return `
            <div class="container">
                {{#> FormAuth}}
                  {{{ Avatar }}}
                  {{{ InputField label="Почта" ref="email" validate=validate.email }}}
                  {{{ InputField label="Логин" ref="login" validate=validate.login }}}
                  {{{ InputField label="Имя" ref="first_name" validate=validate.name }}}
                  {{{ InputField label="Фамилия" ref="last_name" validate=validate.name }}}
                  {{{ InputField label="Имя в чате" ref="chat_name" validate=validate.name }}}
                  {{{ InputField label="Телфон" ref="phone" validate=validate.phone }}}
                  {{{ Button label="Сохранить" type="primary" page="profile"}}} 
                {{/FormAuth}}            
            </div>
        `;
  }
}
