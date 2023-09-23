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
    
    profile: {
      
      
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
