import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: (to, from, next) => {
      const token = to.query.token;
      if (typeof token === 'string') {
        // 將 token 存到 localStorage 或 Vuex
        localStorage.setItem('authToken', token);

        // 移除 URL 中的 token 參數
        next({ path: '/', query: {} });
      } else {
        next();
      }
    },
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
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
