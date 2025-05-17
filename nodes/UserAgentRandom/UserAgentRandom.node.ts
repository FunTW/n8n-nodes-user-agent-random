import {
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
	INodeExecutionData,
	IDataObject,
} from 'n8n-workflow';
import { generateUserAgent } from './services/userAgent.service';

/**
 * User Agent Random Node
 */
export class UserAgentRandom implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'User Agent Random',
		name: 'userAgentRandom',
		icon: 'file:images/userAgent.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["mode"]}}',
		description: 'Generate random User-Agent headers for HTTP requests',
		defaults: {
			name: 'User Agent Random',
			color: '#ff9900',
		},
		inputs: [
			{
				type: 'main',
				displayName: 'Input',
			},
		],
		outputs: [
			{
				type: 'main',
				displayName: 'Output',
			},
		],
		properties: [
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				options: [
					{
						name: 'Random (Predefined Library)',
						value: 'random',
						description: 'Randomly select from predefined User-Agent library',
					},
					{
						name: 'Dynamic Generation',
						value: 'dynamic',
						description: 'Dynamically generate a new User-Agent with random components',
					},
					{
						name: 'Custom',
						value: 'custom',
						description: 'Randomly select User-Agent from custom list',
					},
				],
				default: 'random',
				description: 'Source of User-Agent',
			},
			{
				displayName: 'User-Agent Type',
				name: 'userAgentType',
				type: 'options',
				displayOptions: {
					show: {
						mode: ['random'],
					},
				},
				options: [
					{
						name: 'Desktop Browser',
						value: 'desktop',
						description: 'Desktop browsers like Chrome, Firefox, Safari, Edge',
					},
					{
						name: 'Mobile Browser',
						value: 'mobile',
						description: 'Mobile browsers on iOS and Android',
					},
					{
						name: 'All Types',
						value: 'all',
						description: 'Include all supported browser types',
					},
				],
				default: 'desktop',
				description: 'Browser type to use',
			},
			{
				displayName: 'Custom User-Agent List',
				name: 'customUserAgents',
				type: 'string',
				displayOptions: {
					show: {
						mode: ['custom'],
					},
				},
				typeOptions: {
					rows: 4,
				},
				default: '',
				placeholder: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...\nMozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...',
				description: 'Enter one User-Agent per line, will randomly select from these values',
			},
			{
				displayName: 'Output Method',
				name: 'outputMode',
				type: 'options',
				options: [
					{
						name: 'User-Agent Only',
						value: 'userAgentOnly',
						description: 'Returns only the generated User-Agent string',
					},
					{
						name: 'Add as Item Property',
						value: 'addProperty',
						description: 'Add User-Agent as a property to input items',
					},
					{
						name: 'Create Full HTTP Headers',
						value: 'fullHeaders',
						description: 'Create complete HTTP headers object with User-Agent',
					},
				],
				default: 'addProperty',
				description: 'How to output the generated User-Agent',
			},
			{
				displayName: 'Property Name',
				name: 'propertyName',
				type: 'string',
				displayOptions: {
					show: {
						outputMode: ['addProperty'],
					},
				},
				default: 'userAgent',
				description: 'Property name to store the User-Agent',
			},
			{
				displayName: 'Headers Property Name',
				name: 'headersPropertyName',
				type: 'string',
				displayOptions: {
					show: {
						outputMode: ['fullHeaders'],
					},
				},
				default: 'headers',
				description: 'Property name to store HTTP headers',
			},
			{
				displayName: 'Merge Existing Headers',
				name: 'mergeHeaders',
				type: 'boolean',
				displayOptions: {
					show: {
						outputMode: ['fullHeaders'],
					},
				},
				default: true,
				description: 'Whether to merge User-Agent into existing headers if property exists',
			},
		],
	};

	// Execute function handles all requests
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		
		// Get all parameters
		const mode = this.getNodeParameter('mode', 0) as string;
		const userAgentType = this.getNodeParameter('userAgentType', 0, 'desktop') as string;
		const outputMode = this.getNodeParameter('outputMode', 0) as string;
		
		// Prepare user agents for custom mode
		let customUserAgents: string[] = [];
		if (mode === 'custom') {
			const customAgentString = this.getNodeParameter('customUserAgents', 0, '') as string;
			customUserAgents = customAgentString
				.split('\n')
				.map(line => line.trim())
				.filter(line => line.length > 0);
			
			if (customUserAgents.length === 0) {
				throw new NodeOperationError(this.getNode(), 'Custom User-Agent list is empty');
			}
		}
		
		// Process each item
		for (let i = 0; i < length; i++) {
			const item = items[i];
			
			// Generate new UA for each request
			const parameters: IDataObject = {
				mode,
				userAgentType,
				customUserAgents,
				useDynamicGeneration: mode === 'dynamic',
			};
			
			const result = generateUserAgent(parameters);
			const userAgent = result.userAgent;
			
			// Handle based on output mode
			if (outputMode === 'userAgentOnly') {
				// Return UA only
				returnData.push({
					json: { userAgent },
				});
			} else if (outputMode === 'addProperty') {
				// Add UA as item property
				const propertyName = this.getNodeParameter('propertyName', i, 'userAgent') as string;
				const newItem = { ...item.json };
				newItem[propertyName] = userAgent;
				returnData.push({
					json: newItem,
				});
			} else if (outputMode === 'fullHeaders') {
				// Create/merge headers
				const headersPropertyName = this.getNodeParameter('headersPropertyName', i, 'headers') as string;
				const mergeHeaders = this.getNodeParameter('mergeHeaders', i, true) as boolean;
				
				const newItem = { ...item.json };
				const headers: IDataObject = {
					'user-agent': userAgent,
				};
				
				if (mergeHeaders && newItem[headersPropertyName] && typeof newItem[headersPropertyName] === 'object') {
					newItem[headersPropertyName] = {
						...(newItem[headersPropertyName] as IDataObject),
						...headers,
					};
				} else {
					newItem[headersPropertyName] = headers;
				}
				
				returnData.push({
					json: newItem,
				});
			}
		}
		
		return [returnData];
	}
} 