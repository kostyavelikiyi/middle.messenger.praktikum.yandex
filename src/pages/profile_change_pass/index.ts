import Handlebars from 'handlebars';
import './profile.css';
export { ProfileChangePassPage as default } from './profile';

Handlebars.registerHelper('profile_change_pass_mock', () => {
  return {
    data: [
      {
        value: '*******',
        label: 'Старый пароль',
      },
      {
        value: '*******',
        label: 'Новый пароль',
      },
      {
        value: '*******',
        label: 'Повторить новый пароль',
      },
    ],
  };
});
