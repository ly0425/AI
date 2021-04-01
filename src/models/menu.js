import { index } from '@/services/api';

function formatter(data, parentPath = '', parentAuthority, parentName) {
  return data.map(i => {
    const item = {
      path: `/${i.nid}`,
      name: `${i.title}`,
      // icon: 'dashboard',
      component: './Detail/Detail',
      routes: i.children,
    };
    let locale = 'menu';
    if (parentName && item.name) {
      locale = `${parentName}.${item.name}`;
    } else if (item.name) {
      locale = `${item.name}`;
    } else if (parentName) {
      locale = parentName;
    }
    const result = {
      ...item,
      locale,
      authority: item.authority || parentAuthority,
    };
    if (item.routes) {
      // eslint-disable-next-line no-param-reassign
      const children = formatter(item.routes, `${parentPath}${item.path}/`);
      // Reduce memory usage
      result.children = children;
    }
    delete result.routes;
    return result;
  });
}

export default {
  namespace: 'menu',

  state: {
    data: [],
  },

  effects: {
    * fetch(_, { call, put }) {
      const response = yield call(index);
      yield put({
        type: 'save',
        payload: formatter(response.document_tree[0].children),
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
