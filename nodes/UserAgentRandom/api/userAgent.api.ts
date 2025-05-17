import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';
import { generateUserAgent } from '../services/userAgent.service';

/**
 * 處理User-Agent API請求
 */
export async function userAgentApiRequest(
	this: IExecuteFunctions,
	method: string,
	parameters: IDataObject = {},
): Promise<any> {
	const workflowId = this.getWorkflow().id || 'default';
    
    // 將工作流ID加入到參數中
    parameters.workflowId = workflowId;
    
    // 呼叫服務函數生成User-Agent
    const result = generateUserAgent(parameters);
    
    return {
        userAgent: result.userAgent,
        batchUserAgent: result.batchUserAgent,
    };
}

/**
 * 處理User-Agent API響應，格式化輸出
 */
export async function processOutput(
	this: IExecuteFunctions,
	items: INodeExecutionData[],
	responseData: any,
	i: number,
): Promise<INodeExecutionData[]> {
	const outputMode = this.getNodeParameter('outputMode', i) as string;
	let returnItems: INodeExecutionData[] = [];
	
	// 根據設置決定輸出格式
	if (outputMode === 'userAgentOnly') {
		// 僅輸出User-Agent
		returnItems.push({
			json: {
				userAgent: responseData.userAgent
			},
			pairedItem: {
				item: i,
			},
		} as INodeExecutionData);
	} else if (outputMode === 'addProperty') {
		// 添加為項目屬性
		const propertyName = this.getNodeParameter('propertyName', i) as string;
		const newItem: INodeExecutionData = {
			json: {
				...items[i].json,
				[propertyName]: responseData.userAgent
			},
			pairedItem: {
				item: i,
			},
		};
		
		if (items[i].binary) {
			newItem.binary = items[i].binary;
		}
		
		returnItems.push(newItem);
	} else if (outputMode === 'fullHeaders') {
		// 創建完整的HTTP頭部對象
		const headersPropertyName = this.getNodeParameter('headersPropertyName', i) as string;
		const mergeHeaders = this.getNodeParameter('mergeHeaders', i) as boolean;
		
		// 初始化頭部對象
		let headers: Record<string, string> = {
			'user-agent': responseData.userAgent as string
		};
		
		// 如果需要合併現有頭部
		if (mergeHeaders && items[i].json[headersPropertyName] && typeof items[i].json[headersPropertyName] === 'object') {
			headers = {
				...items[i].json[headersPropertyName] as Record<string, string>,
				'user-agent': responseData.userAgent as string
			};
		}
		
		const newItem: INodeExecutionData = {
			json: {
				...items[i].json,
				[headersPropertyName]: headers
			},
			pairedItem: {
				item: i,
			},
		};
		
		if (items[i].binary) {
			newItem.binary = items[i].binary;
		}
		
		returnItems.push(newItem);
	}
	
	return returnItems;
} 