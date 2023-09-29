import Block from '../../core/Block';
import validateUtils from '../../utils/validate';

export class RegistrationPage extends Block {
  constructor() {
    super({
      validate: {
        email: validateUtils.email,
        name: validateUtils.name,
        login: validateUtils.login,
        phone: validateUtils.phone,
        password: validateUtils.password,
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
                    {{{ InputField label="Почта" ref="email" name="email" validate=validate.email }}}
                    {{{ InputField label="Логин" ref="login" name="login" validate=validate.login }}}
                    {{{ InputField label="Имя" ref="first_name" name="first_name" validate=validate.name }}}
                    {{{ InputField label="Фамилия" ref="last_name" name="second_name" validate=validate.name }}}
                    {{{ InputField label="Телфон" ref="phone" name="phone" validate=validate.phone }}}
                    {{{ InputField label="Пароль" ref="password" name="password" validate=validate.password }}}
                    {{{ InputField label="Пароль (еще раз)" ref="password2" name="password2" validate=validate.password }}}
                    {{{ Button label="Зарегистрироваться" type="primary" page="chat" onClick=onSignUp }}}
                    {{{ Button label="Войти" type="link" page="login"}}}
                {{/FormAuth}}
            </div>
        `;
  }
}
