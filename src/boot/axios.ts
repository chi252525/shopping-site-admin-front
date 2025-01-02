import { boot } from 'quasar/wrappers';
import axios, { isAxiosError } from 'axios';

import { Notify } from 'quasar';

console.log('API Base URL:', process.env.VUE_APP_BACKEND_API_URL);

const api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
//Quasar Notify plugin

function handleNotification(
  message: string,
  type = 'negative',
  position:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom'
    | 'left'
    | 'right'
    | 'center' = 'top'
) {
  Notify.create({ message, type, position });
}

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;

  api.interceptors.response.use(
    (response) => response,
    async (err) => {
      if (err.response) {
        const { status } = err.response;
        switch (status) {
          case 401:
          case 402:
          case 403:
          case 500:
            handleNotification('伺服器出錯', 'negative');
            break;
          case 503:
            handleNotification('服務失效', 'negative');
            break;
          default:
            handleNotification(`連結錯誤${status}`, 'negative');
            break;
        }
      } else if (err.request) {
        handleNotification('請求錯誤，無回應', 'negative');
        console.log('攔截器請求錯誤:', err.request, err);
      } else {
        handleNotification(`錯誤: ${err.message}`, 'negative');
        console.log('攔截器設置錯誤:', err.message, err);
      }
      return Promise.reject(err);
    }
  );
});

export { api, isAxiosError };
