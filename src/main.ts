// TODO fix disables
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { registerComponent } from './core/resgiterComponent';

const pages = {
  login: Pages.LoginPage,
  chat: Pages.ChatPage,
  profile: Pages.ProfilePage,
  profile_change_data: Pages.ProfileChangeDataPage,
  profile_change_pass: Pages.ProfileChangePassPage,
  registration: Pages.RegistrationPage,
};

// Object.entries(Components).forEach(([ name, component ]) => {
//   if(['Input', 'Button'].includes(name)) {
//     registerComponent(name, component);
//     return;
//   }
//   Handlebars.registerPartial(name, component);

// });

Handlebars.registerPartial('FormAuth', Components.FormAuth);
Handlebars.registerPartial(
  'ProfileDataContainer',
  Components.ProfileDataContainer,
);

registerComponent('Button', Components.Button);
registerComponent('InputField', Components.InputField);
registerComponent('Input', Components.Input);
registerComponent('ErrorLine', Components.ErrorLine);
registerComponent('Avatar', Components.Avatar);
registerComponent('ProfileData', Components.ProfileData);
registerComponent('ChatPreview', Components.ChatPreview);
registerComponent('ChatDetails', Components.ChatDetails);

function navigate(page: string) {
  const app = document.getElementById('app');

  // @ts-ignore
  const Component = pages[page];
  const component = new Component();
  app?.replaceChildren(component.getContent()!);
}

document.addEventListener('DOMContentLoaded', () =>
  navigate('login'),
);

document.addEventListener('click', (e) => {
  // @ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
