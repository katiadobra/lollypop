import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://lollypop-c3378.firebaseio.com/'
});

export default instance;
