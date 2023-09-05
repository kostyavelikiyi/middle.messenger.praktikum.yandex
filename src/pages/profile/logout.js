document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("logout");
  auth.logOut();
});
