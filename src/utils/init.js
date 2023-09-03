class Auth {
  constructor() {
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
  }
  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/pages/login/login.html");
    }
  }
  logOut() {
    localStorage.removeItem("auth");
    window.location.replace("./pages/login/login.hbs");
  }
}

const auth = new Auth();
//todo перенести в отдельныый файл
document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout");
  auth.logOut();
});
