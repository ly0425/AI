import details from '../pages/Detail/Detail';
export const getNavData = () => {
  return [
    {
      name: '首页',
      path: '/ai',
      children: [
        {
          name: '详情',
          path: 'detail/:id',
          component: details,
        },
      ]
    }

  ];
}

