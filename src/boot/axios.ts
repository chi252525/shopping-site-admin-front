import { boot } from 'quasar/wrappers';
import axios, { isAxiosError } from 'axios';

import { useAuthStore } from 'stores/auth';
/**
import { Notify } from 'quasar';
*/
console.log('API Base URL:', process.env.VUE_APP_BACKEND_API_URL);

const api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache, no-store',
  },
});
//Quasar Notify plugin
/**
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
**/
export default boot(({ app }) => {
  app.config.globalProperties.$api = api;

  api.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    const token =
      authStore.user.accessToken || localStorage.getItem('user.accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

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
            console.log('伺服器出错');
            break;
          case 503:
            console.log('服務失效');
            break;
          default:
            console.log(`連結錯誤${status}`);
            break;
        }
      } else if (err.request) {
        console.log('攔截器請求錯誤:', err.request, err);
      } else {
        console.log('攔截器設置錯誤:', err.message, err);
      }
      return Promise.reject(err);
    }
  );
});

export { api, isAxiosError };
