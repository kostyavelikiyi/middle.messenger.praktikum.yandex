import Block from '../../core/Block';
import validateUtils from '../../utils/validate';

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: validateUtils.login,
        password: validateUtils.password,
      },
      onLogin: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();

        console.log({
          login,
          password,
        });
      },
    });
  }

  protected render(): string {
    return `
            <div class="container">
                {{#> FormAuth}}
                    {{{ InputField label="Логин" ref="login" name="login" validate=validate.login }}}
                    {{{ InputField label="Пароль" ref="password" name="password" validate=validate.password }}}
                    {{{ Button label="Войти" type="primary" page="chat" onClick=onLogin }}}
                    {{{ Button label="Регистрация" type="link" page="registration"}}}
                {{/FormAuth}}
            </div>
        `;
  }
}
