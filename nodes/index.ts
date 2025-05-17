import { INodeType } from 'n8n-workflow';

// 直接導入節點
import { UserAgentRandom } from './UserAgentRandom/UserAgentRandom.node';

// 導出節點類型集合以供n8n使用
export const nodeTypes: INodeType[] = [
  new UserAgentRandom(),
]; 