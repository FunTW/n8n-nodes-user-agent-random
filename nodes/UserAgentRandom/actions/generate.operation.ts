/**
 * User Agent Random 節點操作
 */

import {
	IExecuteFunctions,
	INodeExecutionData,
	LoggerProxy,
} from 'n8n-workflow';

import { getRandomUserAgent, getRandomCustomUserAgent } from '../transport/userAgents';

// 工作流範圍內的User-Agent存儲
const workflowUserAgents: Record<string, string> = {};

/**
 * 生成用戶代理操作的執行函數
 */
export async function execute(
	this: IExecuteFunctions,
	items: INodeExecutionData[],
): Promise<INodeExecutionData[]> {
	const returnItems: INodeExecutionData[] = [];
	
	// 用於存儲批次級別的User-Agent
	let batchUserAgent: string | undefined;
	
	// 獲取工作流ID
	const workflowId = this.getWorkflow().id || '';
	
	// 循環處理所有項目
	for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
		try {
			const item = items[itemIndex];
			const newItem: INodeExecutionData = {
				json: { ...item.json },
				binary: item.binary,
			};
			
			// 獲取參數
			const mode = this.getNodeParameter('mode', itemIndex) as string;
			const randomizePer = this.getNodeParameter('randomizePer', itemIndex) as string;
			const outputMode = this.getNodeParameter('outputMode', itemIndex) as string;
			
			// 決定當前請求的User-Agent
			let currentUserAgent: string | undefined;
			
			// 檢查是否需要生成新的User-Agent
			const shouldGenerateNew = 
				randomizePer === 'request' || 
				(randomizePer === 'batch' && batchUserAgent === undefined) ||
				(randomizePer === 'workflow' && !workflowUserAgents[workflowId]);
			
			if (shouldGenerateNew) {
				if (mode === 'random') {
					// 從預定義庫中選擇
					const userAgentType = this.getNodeParameter('userAgentType', itemIndex) as 'desktop' | 'mobile' | 'all';
					currentUserAgent = getRandomUserAgent(userAgentType);
				} else if (mode === 'custom') {
					// 從用戶提供的列表中選擇
					const customUserAgents = this.getNodeParameter('customUserAgents', itemIndex) as string;
					currentUserAgent = getRandomCustomUserAgent(customUserAgents);
					
					// 如果自定義列表為空，使用默認User-Agent
					if (currentUserAgent === undefined) {
						currentUserAgent = getRandomUserAgent('desktop');
						LoggerProxy.warn('自定義User-Agent列表為空，使用默認User-Agent');
					}
				}
				
				// 存儲User-Agent用於下一個請求或批次
				if (randomizePer === 'batch') {
					batchUserAgent = currentUserAgent;
				} else if (randomizePer === 'workflow') {
					workflowUserAgents[workflowId] = currentUserAgent as string;
				}
			} else {
				// 使用已存在的值
				if (randomizePer === 'batch') {
					currentUserAgent = batchUserAgent;
				} else if (randomizePer === 'workflow') {
					currentUserAgent = workflowUserAgents[workflowId];
				}
			}
			
			// 根據輸出模式處理
			if (outputMode === 'userAgentOnly') {
				// 僅輸出User-Agent
				newItem.json = { 
					userAgent: currentUserAgent 
				};
			} else if (outputMode === 'addProperty') {
				// 添加為項目屬性
				const propertyName = this.getNodeParameter('propertyName', itemIndex) as string;
				newItem.json[propertyName] = currentUserAgent;
			} else if (outputMode === 'fullHeaders') {
				// 創建完整的HTTP頭部對象
				const headersPropertyName = this.getNodeParameter('headersPropertyName', itemIndex) as string;
				const mergeHeaders = this.getNodeParameter('mergeHeaders', itemIndex) as boolean;
				
				// 初始化頭部對象
				let headers: Record<string, string> = {
					'user-agent': currentUserAgent as string
				};
				
				// 如果需要合併現有頭部
				if (mergeHeaders && newItem.json[headersPropertyName] && typeof newItem.json[headersPropertyName] === 'object') {
					headers = {
						...newItem.json[headersPropertyName] as Record<string, string>,
						'user-agent': currentUserAgent as string
					};
				}
				
				newItem.json[headersPropertyName] = headers;
			}
			
			returnItems.push(newItem);
		} catch (error) {
			if (this.continueOnFail()) {
				returnItems.push(items[itemIndex]);
			} else {
				throw error;
			}
		}
	}
	
	return returnItems;
} 