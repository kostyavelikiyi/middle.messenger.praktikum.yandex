import Block from '../../core/Block';

export class RegistrationPage extends Block {
  constructor() {
    super({
      validate: {
        email: (value: string) => {
          let error = '';
          if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
            error = 'невалидный email';
          }
          return error;
        },
        name: (value: string) => {
          let error = '';
          if (!/^[A-ZА-ЯЁ][а-яА-ЯёЁ-]+$/.test(value)) {
            error =
              'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (кроме -)';
          }
          return error;
        },
        login: (value: string) => {
          let error = '';
          if (!/^(?=.*[A-Za-z])[A-Za-z0-9_-]{3,20}$/.test(value)) {
            error =
              'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
          }
          return error;
        },
        phone: (value: string) => {
          let error = '';
          if (
            !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/.test(value)
          ) {
            error = 'неверный номер телефона';
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
      onSignUp: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const email = this.refs.email.value();
        const login = this.refs.login.value();
        const name = this.refs.first_name.value();
        const lastName = this.refs.last_name.value();
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
                    {{{ InputField label="Имя" ref="first_name" validate=validate.name }}}
                    {{{ InputField label="Фамилия" ref="last_name" validate=validate.name }}}
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
