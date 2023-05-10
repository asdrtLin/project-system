import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  layout: false,
  routes: [
    {
      path: '/',
      component: '@/layouts/BaseLayout/index.tsx',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          name: '首页',
          path: '/home',
          component: './Home',
        },
        {
          name: '权限演示',
          path: '/access',
          component: './Access',
        },
        {
          name: ' CRUD 示例',
          path: '/table',
          component: './Table',
        },
        {
          name: 'vue3',
          path: '/vue3/*',
          microApp: 'vue3',
        },
      ],
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'vue3',
          entry: 'http://localhost:7105',
        },
      ],
    },
  },
  npmClient: 'yarn',
});
