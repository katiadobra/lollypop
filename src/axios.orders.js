import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://lollyppua-9bb54.firebaseio.com/'
});

export default instance;
