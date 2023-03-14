const token = localStorage.getItem('token');
if (token === 'null') {
  localStorage.removeItem('token');
}
const userToken = () => (token);

export default userToken;
