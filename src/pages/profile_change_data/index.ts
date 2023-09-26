import Handlebars from 'handlebars';
import './profile.css';
export { ProfileChangeDataPage as default } from './profile';

Handlebars.registerHelper('profile_change_mock', () => {
  return {
    data: [
      {
        label: 'Почта',
        value: 'pochta@yandex.ru',
        property: 'email',
      },
      {
        label: 'Логин',
        value: 'ivanivanov',
        property: 'login',
      },
      {
        label: 'Имя',
        value: 'Иван',
        property: 'first_name',
      },
      {
        label: 'Фамилия',
        value: 'Иванов',
        property: 'second_name',
      },
      {
        label: 'Имя в чате',
        value: 'Иван',
        property: 'display_name',
      },

      {
        label: 'Телефон',
        value: '+7 (909) 967 30 30',
        property: 'phone',
      },
    ],
  };
});
