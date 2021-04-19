import details from '../pages/Detail/Detail';
export const getNavData = (app) => {
  return [
    {
      name: '首页',
      path: '/ai',
      children: [
        {
          name: '医院经济运行分析',
          path: 'detail',
          children: [
            {
              name: '收入，服务量异常值检测',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '科室收入影响因素分析',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '科室收入相关性和服务量相关性',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '服务量，成本和收入预测',
              path: 'detail/:id',
              component: details,
            },
          ]
        },
        {
          name: '运营管理术语标化',
          path: 'detail',
          children: [
            {
              name: '医疗服务项目标化接口文档',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '耗材术语标化接口文档',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '设备术语标化接口文档',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '自定义标准接口文档',
              path: 'detail/:id',
              component: details,
            },
          ]
        },
        {
          name: '医院管理运营知识图谱',
          path: 'detail',
          children: [
            {
              name: '临床路径知识图谱',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '病种资源消耗知识图谱',
              path: 'detail/:id',
              component: details,
            },
          ]
        },
        {
          name: '基础算法库',
          path: 'detail',
          children: [
            {
              name: '关联规则挖掘SDK文档',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '相关性分析SDK文档',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '机器学习算法库',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '中文分词和实体识别',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '优化算法-线性规划SDK文档',
              path: 'detail/:id',
              component: details,
            },
          ]
        },
        {
          name: '平台文档',
          path: 'detail',
          children: [
            {
              name: '数据集管理',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '人工智能用户平台',
              path: 'detail/:id',
              component: details,
            },
            {
              name: '接口调用说明',
              path: 'detail/:id',
              component: details,
            },
          ]
        },
      ]
    }

  ];
}

