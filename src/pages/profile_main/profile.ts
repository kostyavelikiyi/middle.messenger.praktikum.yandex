import Block from '../../core/Block';

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
        {{#with (profile_main_mock)}}
            <div class="flex-container_profile">
            {{{ Avatar }}}
            <div>{{name}}</div>
            {{#> ProfileDataContainer}}
                {{#each data}}
                    {{{ ProfileData label=this.label value=this.value }}}
                {{/each}}

                {{{ Button label="Изменить данные" type="link" page="profile_change_data"}}}
                {{{ Button label="Изменить пароль" type="link" page="profile_change_pass"}}}
                {{{ Button label="Выйти" type="link_red" page="login"}}}
            {{/ProfileDataContainer}}
            </div>
        {{/with}}
        `;
  }
}
