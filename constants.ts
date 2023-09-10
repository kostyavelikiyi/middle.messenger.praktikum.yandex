export default {
  data: {
    login: {
      data: [
        {
          label_name: 'Username',
          label_id: 'name',
          type: 'input',
          sub_type: 'text',
        },
        {
          label_name: 'Password',
          label_id: 'psw',
          type: 'input',
          sub_type: 'password',
        },
        {
          label_name: 'Login',
          type: 'submit',
        },
        {
          type: 'href',
          link: '../registration/registration.html',
          label_name: 'Sign up',
        },
      ],
    },
    registration: {
      data: [
        {
          label_name: 'Email',
          label_id: 'email',
          type: 'input',
          sub_type: 'email',
        },
        {
          label_name: 'Username',
          label_id: 'name',
          type: 'input',
          sub_type: 'text',
        },
        {
          label_name: 'First Name',
          label_id: 'first_name',
          type: 'input',
          sub_type: 'text',
        },
        {
          label_name: 'Second Name',
          label_id: 'second_name',
          type: 'input',
          sub_type: 'text',
        },
        {
          label_name: 'Phone',
          label_id: 'phone',
          type: 'input',
          sub_type: 'tel',
        },
        {
          label_name: 'Password',
          label_id: 'psw',
          type: 'input',
          sub_type: 'password',
        },
        {
          label_name: 'Login',
          type: 'submit',
        },
        {
          type: 'href',
          link: '../login/login.html',
          label_name: 'Sign in',
        },
      ],
    },
    message: {
      data: [
        { name: 'Иван', message: 'Привет', time: '10:49', count: '4' },
        { name: 'Петя', message: 'Хорошо', time: 'Пн', count: '2' },
        { name: 'Маша', message: 'Как дела?', time: 'Вс', count: '3' },
        {
          name: 'Лена',
          message: 'Что делаешь?',
          time: '1 мая 2020',
          count: '',
        },
      ],
    },
    profile: {
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
          link: 'profile_change_data.html',
          label: 'Изменить данные',
          css_classes: 'blue',
        },
        {
          link: 'profile_change_password.html',
          label: 'Изменить пароль',
          css_classes: 'blue',
        },
        {
          link: '../login/login.html',
          label: 'Выйти',
          css_classes: 'red logout',
        },
      ],
      pass: [
        {
          label: 'Старый пароль',
          value: 'pochta@yandex.ru',
          id: 'oldPassword',
        },
        {
          label: 'Новый пароль',
          value: 'ivanivanov',
          id: 'newPassword',
        },
        {
          label: 'Повторите новый пароль',
          value: 'Иван',
          id: 'newPassword_validate',
        },
      ],
    },
    error500: {
      number: 500,
      text: 'Мы уже фиксим',
      linkLabel: 'Назад к чатам',
      linkUrl: '../chat/chat.html',
    },
    error404: {
      number: 404,
      text: 'Не туда попали',
      linkLabel: 'Назад к чатам',
      linkUrl: '../chat/chat.html',
    },
  },
};
