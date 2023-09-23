// TODO fix disabels bellow
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
class Login {
  constructor() {
    this.setSessionOnSubmit();
  }

  setSessionOnSubmit() {
    // todo add validate logic
    document.getElementById('form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('auth', '1');
      window.location.replace('/pages/chat/chat.html');
    });
  }
}

const login = new Login();
