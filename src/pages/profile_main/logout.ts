/* eslint-disable @typescript-eslint/no-non-null-assertion */
document.getElementById('logout')!.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('logout');
  auth.logOut();
});
