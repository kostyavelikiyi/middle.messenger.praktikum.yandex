import Block from '../../core/Block';
import validateUtils from '../../utils/validate';

export class ProfileChangePassPage extends Block {
  constructor() {
    super({
      validate: {
        password: validateUtils.password,
      },
    });
  }

  protected render(): string {
    return `
        <div class="container">
            {{#> FormAuth}}
            {{{ Avatar }}}
            {{{ InputField label="Пароль" ref="password" validate=validate.password }}}
            {{{ InputField label="Пароль (еще раз)" ref="password2" validate=validate.password }}}
            {{{ Button label="Сохранить" type="primary" page="profile"}}}
            {{/FormAuth}}
        </div>
        `;
  }
}
