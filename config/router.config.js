export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: 'home',
        component: './Index/Index',
      },
      {
        path: '/:id',
        name: 'detail',
        component: './Detail/Detail',
      },
      {
        component: '404',
      },
    ],
  },
];
