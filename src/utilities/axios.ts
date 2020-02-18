import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001'
});

const request = <T>(options: AxiosRequestConfig) =>
  client(options)
    .then((response: AxiosResponse<T>) => response)
    .catch((error: AxiosError) =>
      Promise.reject(error.response || error.message)
    );

export default request;
