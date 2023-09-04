class Login {
  constructor() {
    this.validateonSubmit();
  }
  validateonSubmit() {
    //todo add validate logic
    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("submit");
      localStorage.setItem("auth", 1);
      window.location.replace("/pages/chat/chat.html");
    });
  }
}

const login = new Login();
