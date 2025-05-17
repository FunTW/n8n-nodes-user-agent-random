/**
 * User Agent Random 節點資源
 */

import type { INodeProperties } from 'n8n-workflow';

/**
 * 節點的共享屬性
 */
export const userAgentProperties: INodeProperties[] = [
	{
		displayName: '模式',
		name: 'mode',
		type: 'options',
		options: [
			{
				name: '隨機 (預定義庫)',
				value: 'random',
				description: '從預定義的User-Agent庫中隨機選擇',
			},
			{
				name: '自定義',
				value: 'custom',
				description: '從自定義列表中隨機選擇User-Agent',
			},
		],
		default: 'random',
		description: 'User-Agent的來源',
	},
	{
		displayName: 'User-Agent類型',
		name: 'userAgentType',
		type: 'options',
		displayOptions: {
			show: {
				mode: ['random'],
			},
		},
		options: [
			{
				name: '桌面瀏覽器',
				value: 'desktop',
				description: 'Chrome, Firefox, Safari, Edge等桌面瀏覽器',
			},
			{
				name: '移動設備瀏覽器',
				value: 'mobile',
				description: 'iOS和Android上的移動瀏覽器',
			},
			{
				name: '所有類型',
				value: 'all',
				description: '包含所有支持的瀏覽器類型',
			},
		],
		default: 'desktop',
		description: '要使用的瀏覽器類型',
	},
	{
		displayName: '自定義User-Agent列表',
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
		description: '每行輸入一個User-Agent，將從這些值中隨機選擇',
	},
	{
		displayName: '隨機化頻率',
		name: 'randomizePer',
		type: 'options',
		options: [
			{
				name: '每個請求',
				value: 'request',
				description: '每次執行節點時使用新的隨機User-Agent',
			},
			{
				name: '每個批次',
				value: 'batch',
				description: '同一批次處理的所有項目使用相同的User-Agent',
			},
			{
				name: '每個工作流執行',
				value: 'workflow',
				description: '整個工作流執行期間使用相同的User-Agent',
			},
		],
		default: 'request',
		description: '何時切換到新的隨機User-Agent',
	},
	{
		displayName: '輸出方式',
		name: 'outputMode',
		type: 'options',
		options: [
			{
				name: '僅輸出User-Agent',
				value: 'userAgentOnly',
				description: '僅返回生成的User-Agent字符串',
			},
			{
				name: '添加為項目屬性',
				value: 'addProperty',
				description: '將User-Agent添加為輸入項目的屬性',
			},
			{
				name: '創建完整的HTTP頭部',
				value: 'fullHeaders',
				description: '創建包含User-Agent的完整HTTP頭部對象',
			},
		],
		default: 'addProperty',
		description: '如何輸出生成的User-Agent',
	},
	{
		displayName: '屬性名稱',
		name: 'propertyName',
		type: 'string',
		displayOptions: {
			show: {
				outputMode: ['addProperty'],
			},
		},
		default: 'userAgent',
		description: '存儲User-Agent的屬性名稱',
	},
	{
		displayName: '頭部屬性名稱',
		name: 'headersPropertyName',
		type: 'string',
		displayOptions: {
			show: {
				outputMode: ['fullHeaders'],
			},
		},
		default: 'headers',
		description: '存儲HTTP頭部的屬性名稱',
	},
	{
		displayName: '合併現有頭部',
		name: 'mergeHeaders',
		type: 'boolean',
		displayOptions: {
			show: {
				outputMode: ['fullHeaders'],
			},
		},
		default: true,
		description: '如果該屬性已存在，是否將User-Agent合併到現有的頭部中',
	},
]; 