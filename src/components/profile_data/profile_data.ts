// TODO fix dissables
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Block from '../../core/Block';

interface IProps {
  label: string;
  value: string;
}

export class ProfileData extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected render(): string {
    const { label, value } = this.props;
    return `
            <li>
              <div class="profile_row">
                <div>${label} </div>
                <div class="text_min_light">${value}</div>
              </div>
            </li>
        `;
  }
}
