import Block from '../../core/Block';
import validateUtils from '../../utils/validate';

export class ProfileChangePassPage extends Block {
  constructor() {
    super({
      validate: {
        password: validateUtils.password,
      },
      onSave: (event: { preventDefault: () => void }) => {
        event.preventDefault();
        console.log(this.refs);
        const oldPassword = this.refs.oldPassword.value();
        const newPassword = this.refs.newPassword.value();
        const newPassword2 = this.refs.newPassword2.value();

        console.log({
          oldPassword,
          newPassword,
          newPassword2,
        });
      },
    });
  }

  protected render(): string {
    return `
        <div class="container">
            {{#> FormAuth}}
            {{{ Avatar }}}
            {{{ InputField label="Старый пароль" ref="oldPassword" name="oldPassword" validate=validate.password }}}
            {{{ InputField label="Новый пароль" ref="newPassword" name="newPassword" validate=validate.password }}}
            {{{ InputField label="Новый пароль (еще раз)" ref="newPassword2" name="newPassword2" validate=validate.password }}}
            {{{ Button label="Сохранить" type="primary" page="profile" onClick=onSave}}}
            {{/FormAuth}}
        </div>
        `;
  }
}
