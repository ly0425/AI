import thunk from 'redux-thunk';
import { getNavData } from './models/nav';

const vadpAI = {
  onAction: thunk,
  thunk: thunk,
  getNavData: getNavData,
}
window.vadpAIs = vadpAI;
export default vadpAI
