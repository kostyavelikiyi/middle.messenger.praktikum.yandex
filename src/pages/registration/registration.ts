import Block from '../../core/Block';

export class RegistrationPage extends Block {
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
              'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
          }
          return error;
        },
      },
      onSignUp: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        const name = this.refs.name.value();
        const lastName = this.refs.lastName.value();
        const phone = this.refs.phone.value();
        const password = this.refs.password.value();
        const password2 = this.refs.password2.value();

        console.log({
          email,
          login,
          name,
          lastName,
          phone,
          password,
          password2,
        });
      },
    });
  }

  protected render(): string {
    return `
            <div class="container">
                {{#> FormAuth}}
                    {{{ InputField label="Почта" ref="email" validate=validate.email }}}
                    {{{ InputField label="Логин" ref="login" validate=validate.login }}}
                    {{{ InputField label="Имя" ref="name" validate=validate.name }}}
                    {{{ InputField label="Фамилия" ref="lastName" validate=validate.lastName }}}
                    {{{ InputField label="Телфон" ref="phone" validate=validate.phone }}}
                    {{{ InputField label="Пароль" ref="password" validate=validate.password }}}
                    {{{ InputField label="Пароль (еще раз)" ref="password2" validate=validate.password }}}
                    {{{ Button label="Зарегистрироваться" type="primary" page="chat" onClick=onSignUp }}}
                    {{{ Button label="Войти" type="link" page="login"}}}
                {{/FormAuth}}
            </div>
        `;
  }
}
