import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev.nmcms.ru/api/',
  headers: { 'X-Custom-Header': 'foobar' },
});
