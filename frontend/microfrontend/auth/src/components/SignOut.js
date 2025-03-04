import React from 'react';

// перенесно как есть из App.js
function onSignOut() {
  // при вызове обработчика onSignOut происходит удаление jwt
  localStorage.removeItem("jwt");
  setIsLoggedIn(false);
  // После успешного вызова обработчика onSignOut происходит редирект на /signin
  history.push("/signin");
}