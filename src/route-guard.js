(() => {
  const isAuth = getStorage('isAuth');
  if (!isAuth) {
    logout();
    alert('Log in to view your employees.');
    window.location.href = '/login.html';
  }
})();