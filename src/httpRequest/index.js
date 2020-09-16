import axios from 'axios';

const httpRequest = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    method: 'get',
    responseType: 'json',
  });

  return instance;
};

const get = (url = {}) => {
  return httpRequest().get(url);
};

export { get };
