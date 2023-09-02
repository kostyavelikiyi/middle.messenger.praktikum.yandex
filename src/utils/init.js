const auth = new Auth();
//todo перенести в отдельныый файл
document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout");
  auth.logOut();
});


