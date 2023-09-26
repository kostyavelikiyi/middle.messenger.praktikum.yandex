import Block from '../../core/Block';

export class LoginPage extends Block {
  constructor() {
    super({
      validate: {
        login: (value: string) => {
          let error = '';
          if (!/^(?=.*[A-Za-z])[A-Za-z0-9_-]{3,20}$/.test(value)) {
            error =
              'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
          }
          return error;
        },
        password: (value: string) => {
          let error = '';
          if (!/^(?=.*?[A-Z])(?=.*?[0-9]).{8,40}$/.test(value)) {
            error =
              'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
          }
          return error;
        },
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
                    {{{ InputField label="Логин" ref="login" validate=validate.login }}}
                    {{{ InputField label="Пароль" ref="password" validate=validate.password }}}
                    {{{ Button label="Войти" type="primary" page="chat" onClick=onLogin }}}
                    {{{ Button label="Регистрация" type="link" page="registration"}}}
                {{/FormAuth}}
            </div>
        `;
  }
}
