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
};

// Object.entries(Components).forEach(([ name, component ]) => {
//   if(['Input', 'Button'].includes(name)) {
//     registerComponent(name, component);
//     return;
//   }
//   Handlebars.registerPartial(name, component);

// });

Handlebars.registerPartial('FormAuth', Components.FormAuth);
Handlebars.registerPartial('ChatPreview', Components.ChatPreview);
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

function navigate(page: string) {
  const app = document.getElementById('app');

  // if (page != 'login') {
  //   const container = document.getElementById('app')!;
  //   container.innerHTML = Handlebars.compile(pages[page])({});
  //   return;
  // }

  // @ts-ignore
  const Component = pages[page];
  // console.log(Component);
  const component = new Component();
  console.log(component.getContent());
  app?.replaceChildren(component.getContent()!);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e) => {
  // console.log('Click', e);
  // @ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    console.log(page);
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
