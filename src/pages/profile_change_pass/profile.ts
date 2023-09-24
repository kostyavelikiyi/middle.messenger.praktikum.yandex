import Block from '../../core/Block';

export class ProfileChangePassPage extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
        <div class="flex-container_profile">
            {{{ Avatar }}}
            {{#> ProfileDataContainer (profile_change_pass_mock)}}
                {{#each data}}
                    {{{ ProfileData label=this.label  value=this.value }}}
                {{/each }}
            {{/ProfileDataContainer}}
            {{{ Button label="Сохранить" type="primary" page="profile"}}}
        </div>
        `;
  }
}
