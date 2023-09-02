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
      window.location.replace("/");
    });
  }
}

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = { username: "Username" };
document.getElementById("root").innerHTML = template(context);

const login = new Login();
