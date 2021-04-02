import mockjs from 'mockjs';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

const db = {
  "document_tree": [{
    "nid": 96511,
    "title": "AI文档中心",
    "view_node": "<a href=\"\/vista_oa\/1\/node\/96511\">document.json\/96511 <\/a>",
    "weight": "0",
    "depth": "1",
    "nid_1": "",
    "body": "\/vista_oa\/1\/files\/usr\/u1\/banner-bg-odr-ai.png",
    "upload_fid": "banner-bg-odr-ai.png",
    "children": [{
      "nid": 96519,
      "title": "医院经济运行分析",
      "view_node": "<a href=\"\/vista_oa\/1\/node\/96519\">document.json\/96519 <\/a>",
      "weight": "-15",
      "depth": "2",
      "nid_1": 96511,
      "body": "<p>通过AI算法，基于历史数据，对医院诊疗项目进行全成本预算分析，包含收入预测和成本预测，使收入，成本这些事后指标可以提前展现在当下。<\/p>",
      "upload_fid": "20210316150021.png",
      "children": [{
        "nid": 96524,
        "title": "收入，服务量异常值检测",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96524\">document.json\/96524 <\/a>",
        "weight": "-14",
        "depth": "3",
        "nid_1": 96519,
        "body": "  "
      },{
        "nid": 96529,
        "title": "科室收入相关性和服务量相关性",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96529\">document.json\/96529 <\/a>",
        "weight": "-13",
        "depth": "3",
        "nid_1": 96519,
        "body": ""
      },{
        "nid": 96523,
        "title": "服务量，成本和收入预测",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96523\">document.json\/96523 <\/a>",
        "weight": "-12",
        "depth": "3",
        "nid_1": 96519,
        "body": " <p>通过AI算法，基于历史数据，对医院诊疗项目进行全成本预算分析，包含收入预测和成本预测，使收入，成本这些事后指标可以提前展现在当下。<\/p>\n "
      }]
    },{
      "nid": 96514,
      "title": "运营管理术语标化",
      "view_node": "<a href=\"\/vista_oa\/1\/node\/96514\">document.json\/96514 <\/a>",
      "weight": "-14",
      "depth": "2",
      "nid_1": 96511,
      "body": " <p>基于自然语言处理技术和知识图谱，人工标化库，依托文本相似度算法 建立医疗术语标化算法。解决医疗术语使用不标准，医疗术语标准互相映射的问题。<\/p>\n ",
      "upload_fid": "brain.png",
      "children": [{
        "nid": 96534,
        "title": "医疗服务项目标化接口文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96534\">document.json\/96534 <\/a>",
        "weight": "-15",
        "depth": "3",
        "nid_1": 96514,
        "body": " <p>对已有的医疗服务项目进行标化映射到另一个医疗服务项目标准<\/p>\n "
      },{
        "nid": 96516,
        "title": "耗材术语标化接口文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96516\">document.json\/96516 <\/a>",
        "weight": "-14",
        "depth": "3",
        "nid_1": 96514,
        "body": " <p>业务耗材名到CFDA物资编码，医保耗材分类目录标准映射<\/p>\n "
      },{
        "nid": 96533,
        "title": "设备术语标化接口文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96533\">document.json\/96533 <\/a>",
        "weight": "-13",
        "depth": "3",
        "nid_1": 96514,
        "body": " <p>对设备进行CFDA标准编码映射<\/p>\n "
      },{
        "nid": 96517,
        "title": "自定义标准接口文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96517\">document.json\/96517 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96514,
        "body": " <p>构建新的标化目标标准集，扩展标化应用<\/p>\n "
      }]
    },{
      "nid": 96520,
      "title": "医院管理运营知识图谱",
      "view_node": "<a href=\"\/vista_oa\/1\/node\/96520\">document.json\/96520 <\/a>",
      "weight": "-13",
      "depth": "2",
      "nid_1": 96511,
      "body": " <p>从大量的医疗新闻、医院历史数据、公开药品库、和医疗资源库,建立起实体之间的语义关系,最后形成知识图谱、医学大脑、成为社会化医疗知识库<\/p>\n ",
      "upload_fid": "network.jpg",
      "children": [{
        "nid": 96521,
        "title": "病种资源消耗知识图谱",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96521\">document.json\/96521 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96520,
        "body": " <p>构建医院财经域的病种和服务项目知识图谱<\/p>\n "
      },{
        "nid": 96522,
        "title": "临床路径知识图谱",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96522\">document.json\/96522 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96520,
        "body": " <p>基于临床路径规范，构建医院病种和服务项目的临床路径知识图谱，基于临床路径知识图谱可以辅导业务系统规范、经济的运行；智能指导医护人员规范操作，减少操作失误，提高医疗服务质量<\/p>\n "
      }]
    },{
      "nid": 96513,
      "title": "基础算法库",
      "view_node": "<a href=\"\/vista_oa\/1\/node\/96513\">document.json\/96513 <\/a>",
      "weight": "-12",
      "depth": "2",
      "nid_1": 96511,
      "body": " <p>基于优质的AI核心算法技术，覆盖医院运营管理方面的常用算法模型，提供机器学习，自然语言处理，统计分析，约束优化等算法工具，支持领域定制化服务，助力您的经济管理业务腾飞<\/p>\n ",
      "upload_fid": "bytes.jpeg",
      "children": [{
        "nid": 96525,
        "title": "因素分析算法SDK文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96525\">document.json\/96525 <\/a>",
        "weight": "-13",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      },{
        "nid": 96531,
        "title": "关联规则挖掘SDK文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96531\">document.json\/96531 <\/a>",
        "weight": "-12",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      },{
        "nid": 96530,
        "title": "相关性分析SDK文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96530\">document.json\/96530 <\/a>",
        "weight": "-11",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      },{
        "nid": 96526,
        "title": "机器学习算法库",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96526\">document.json\/96526 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      },{
        "nid": 96527,
        "title": "中文分词和实体识别",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96527\">document.json\/96527 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      },{
        "nid": 96528,
        "title": "优化算法-线性规划SDK文档",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96528\">document.json\/96528 <\/a>",
        "weight": "2",
        "depth": "3",
        "nid_1": 96513,
        "body": ""
      }]
    },{
      "nid": 96518,
      "title": "平台文档",
      "view_node": "<a href=\"\/vista_oa\/1\/node\/96518\">document.json\/96518 <\/a>",
      "weight": "-11",
      "depth": "2",
      "nid_1": 96511,
      "body": " <p>机器学习平台是望海数据分析人工智能平台，提供医院运营管理领域的机器学习解决方案。平台致力于让数据分析者更高效、简洁、标准地使用人工智能AI（Artificial Intelligence）技术。目前已经积累了多个运营管理领域的数据分析模型。<\/p>\n ",
      "upload_fid": "ai-person.jpeg",
      "children": [{
        "nid": 96541,
        "title": "数据集管理",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96541\">document.json\/96541 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96518,
        "body": ""
      },{
        "nid": 96540,
        "title": "调用环境",
        "view_node": "<a href=\"\/vista_oa\/1\/node\/96540\">document.json\/96540 <\/a>",
        "weight": "0",
        "depth": "3",
        "nid_1": 96518,
        "body": ""
      }]
    }]
  }]
};

function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

let sourceData;

function getFakeList(req, res) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  sourceData = result;
  return res.json(result);
}

function postFakeList(req, res) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData;

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = Object.assign(item, body);
        }
      });
      break;
    case 'post':
      result.unshift({
        body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.json(result);
}

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2017-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2017-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '凛冬将至',
    updatedAt: new Date('2017-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2017-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2],
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4],
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3],
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    comment: {
      name: '留言',
      link: 'http://github.com/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5],
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
}

function index(req, res) {
  return res.json(db);
}

function detail(req, res) {
  const { id } = req.params;
  const path = `./document_json/${id}_.json`;
  const result = require(path);
  return res.json(result);
}

export default {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
  'GET /api/fake_list': getFakeList,
  'POST /api/fake_list': postFakeList,
  'GET /api/captcha': getFakeCaptcha,
  'GET /api/index': index,
  'GET /api/detail/:id': detail,
};
