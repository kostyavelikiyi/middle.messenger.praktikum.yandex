class Auth {
  constructor() {
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }
  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/pages/login/login.hbs");
    }
  }
  logOut() {
    localStorage.removeItem("auth");
    window.location.replace("./pages/login/login.hbs");
  }
}