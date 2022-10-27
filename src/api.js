import axios from 'axios';

const ServerInfo = {
  BACKEND_URL: `http://localhost:3001`,
  REQUEST_TIMEOUT: 5000,
}

const creteApi = () => {
  const api = axios.create({
    baseURL: ServerInfo.BACKEND_URL,
    timeout: ServerInfo.REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (error) => error;

  api.interceptors.response.use(onSuccess, onFail);
  return api;
}


export {creteApi}
