// TODO fix disables bellow
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
class Auth {
  constructor() {
    const auth = localStorage.getItem('auth');
    this.validateAuth(auth!);
  }

  validateAuth(auth: string) {
    if (auth != '1') {
      window.location.replace('/pages/login/login.html');
    }
  }

  logOut() {
    localStorage.removeItem('auth');
    window.location.replace('/pages/login/login.html');
  }
}

const auth = new Auth();
