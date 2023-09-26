const validateUtils = {
  email: (value: string) => {
    let error = '';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      error = 'невалидный email';
    }
    return error;
  },
  name: (value: string) => {
    let error = '';
    if (!/^[A-ZА-ЯЁ][а-яА-ЯёЁ-]+$/.test(value)) {
      error =
        'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (кроме -)';
    }
    return error;
  },
  login: (value: string) => {
    let error = '';
    if (!/^(?=.*[A-Za-z])[A-Za-z0-9_-]{3,20}$/.test(value)) {
      error =
        'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
    }
    return error;
  },
  phone: (value: string) => {
    let error = '';
    if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/.test(value)) {
      error = 'неверный номер телефона';
    }
    return error;
  },
  password: (value: string) => {
    let error = '';
    if (!/^(?=.*?[A-Z])(?=.*?[0-9]).{8,40}$/.test(value)) {
      error =
        'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра';
    }
    return error;
  },
};

export default validateUtils;
