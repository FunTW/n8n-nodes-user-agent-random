/**
 * User-Agent 字符串庫
 * 用於User Agent Random節點
 */

/**
 * 桌面瀏覽器User-Agent
 */
export const desktopUserAgents = [
  // Chrome (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  // Chrome (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  // Firefox (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0',
  // Firefox (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/118.0',
  // Safari (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  // Edge (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.46',
  // Edge (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.46',
  // Opera (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/103.0.0.0',
  // Opera (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/103.0.0.0',
  // Brave (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Brave/118.1.59.117',
];

/**
 * 行動裝置瀏覽器User-Agent
 */
export const mobileUserAgents = [
  // Chrome (Android)
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
  // Chrome (Android Tablet)
  'Mozilla/5.0 (Linux; Android 13; SM-X906C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  // Safari (iPhone)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  // Safari (iPad)
  'Mozilla/5.0 (iPad; CPU OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  // Firefox (Android)
  'Mozilla/5.0 (Android 13; Mobile; rv:109.0) Gecko/118.0 Firefox/118.0',
  // Firefox (Android Tablet)
  'Mozilla/5.0 (Android 13; Tablet; rv:109.0) Gecko/118.0 Firefox/118.0',
  // Samsung Internet
  'Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/21.0 Chrome/110.0.5481.154 Mobile Safari/537.36',
  // UC Browser
  'Mozilla/5.0 (Linux; Android 13; SM-A536B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36 UCBrowser/15.5.2.407',
  // Opera Mobile
  'Mozilla/5.0 (Linux; Android 13; SM-G998U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36 OPR/64.3.3282.60839',
  // Edge (iPhone)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 EdgiOS/116.0.1938.50 Mobile/15E148 Safari/605.1.15',
];

/**
 * 隨機選擇一個User-Agent
 * @param type - 要選擇的User-Agent類型: 'desktop', 'mobile', 或 'all'
 * @returns 隨機選擇的User-Agent字符串
 */
export function getRandomUserAgent(type: 'desktop' | 'mobile' | 'all' = 'desktop'): string {
  let pool: string[] = [];
  
  if (type === 'desktop') {
    pool = desktopUserAgents;
  } else if (type === 'mobile') {
    pool = mobileUserAgents;
  } else {
    // 'all'
    pool = [...desktopUserAgents, ...mobileUserAgents];
  }
  
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

/**
 * 從自定義列表中隨機選擇一個User-Agent
 * @param customList - 換行符分隔的User-Agent列表
 * @returns 隨機選擇的User-Agent字符串，如果列表為空則返回undefined
 */
export function getRandomCustomUserAgent(customList: string): string | undefined {
  const userAgents = customList
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');
    
  if (userAgents.length === 0) {
    return undefined;
  }
  
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
} 