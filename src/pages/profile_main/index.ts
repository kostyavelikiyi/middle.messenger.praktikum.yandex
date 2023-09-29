import Handlebars from 'handlebars';
import './profile.css';
export { ProfilePage } from './profile';

Handlebars.registerHelper('profile_main_mock', () => {
  return {
    name: 'Костя',
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
    change: [
      {
        type: 'link',
        label: 'Изменить данные',
        page: 'profile_change_data',
      },
      {
        type: 'link',
        page: 'profile_change_password',
        label: 'Изменить пароль',
      },
      {
        type: 'link_red',
        page: 'login',
        label: 'Выйти',
      },
    ],
  };
});
