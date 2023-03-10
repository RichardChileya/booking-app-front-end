const userToken = () => localStorage.getItem('token') || false;

export default userToken;