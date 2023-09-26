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
      onLogin: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        const firstName = this.first_name.name.value();
        const lastName = this.last_name.name.value();
        const chatName = this.chat_name.name.value();
        const phone = this.refs.phone.value();

        console.log({
          email,
          login,
          firstName,
          lastName,
          chatName,
          phone,
        });
      },
    });
  }

  protected render(): string {
    return `
            <div class="container">
                {{#> FormAuth}}
                  {{{ Avatar }}}
                  {{{ InputField label="Почта" ref="email" name="email" validate=validate.email }}}
                  {{{ InputField label="Логин" ref="login" name="login" validate=validate.login }}}
                  {{{ InputField label="Имя" ref="first_name" name="first_name" validate=validate.name }}}
                  {{{ InputField label="Фамилия" ref="last_name" name="last_name" validate=validate.name }}}
                  {{{ InputField label="Имя в чате" ref="chat_name" name="display_name" validate=validate.name }}}
                  {{{ InputField label="Телфон" ref="phone" name="phone" validate=validate.phone }}}
                  {{{ Button label="Сохранить" type="primary" page="profile"}}} 
                {{/FormAuth}}            
            </div>
        `;
  }
}
