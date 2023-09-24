import Block from '../../core/Block';

export class ProfileChangeDataPage extends Block {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
            <div class="flex-container-profile">
                {{{ Avatar }}}
                {{#> ProfileDataContainer (profile_change_mock)}}
                    {{#each data}}
                        {{{ ProfileData label=this.label value=this.value }}}
                    {{/each}}
                {{/ProfileDataContainer}}
                {{{ Button label="Сохранить" type="primary" page="profile"}}}              
            </div>
        `;
  }
}
