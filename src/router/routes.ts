import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: (to, from, next) => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      console.log('token:', token);
      if (token) {
        localStorage.setItem('authToken', token);
        // 使用 pushState() 清除 URL 查詢參數
        window.history.pushState({}, '', '/'); // 清除 URL 中的 query 參數
        next();
      } else {
        next();
      }
    },
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        localStorage.setItem('authToken', '');
        alert('已登出 請重新登入');
        next();
      } else {
        next();
      }
    },
    children: [{ path: '', component: () => import('pages/ShopperLogin.vue') }],
  },
  {
    path: '/product-management',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/productManager/ProductListPage.vue'),
      },
    ],
  },
  {
    path: '/order-management',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/orderManager/OrderListPage.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/DashBoardPage.vue'),
      },
    ],
  },
  {
    path: '/product/:id/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/productManager/ProductDetailEdit.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/product/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/productManager/ProductDetailEdit.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/product/:id/stock-edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/productManager/StockEdit.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
