const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const setTocken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('tokenExpiration', new Date().getTime());
};

const getTocken = () => {
  const now = new Date(Date.now()).getTime();
  const halfAnHour = 30 * 60 * 1000;
  const sinceLogin = now - localStorage.getItem('tokenExpiration');
  if (sinceLogin > halfAnHour) {
    localStorage.getItem('token');
  }
  return false;
};

export default (headers, setTocken, getTocken);
