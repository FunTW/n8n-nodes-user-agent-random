import { IDataObject } from 'n8n-workflow';

/**
 * Desktop Browser User-Agents
 */
const desktopUserAgents = [
  // Chrome (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  // Chrome (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  // Chrome (Linux)
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  // Firefox (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
  // Firefox (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/118.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0',
  // Firefox (Linux)
  'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0',
  // Safari (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  // Edge (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
  // Edge (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.57',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
  // Opera (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0',
  // Opera (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0',
  // Brave (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Brave/120.0.0.0',
  // Brave (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Brave/120.0.0.0',
  // Vivaldi (Windows)
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Vivaldi/6.5.3206.63',
  // Vivaldi (macOS)
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Vivaldi/6.5.3206.63'
];

/**
 * Mobile Browser User-Agents
 */
const mobileUserAgents = [
  // Chrome (Android)
  'Mozilla/5.0 (Linux; Android 12; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 14; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 14; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 12; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 13; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
  // Chrome (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/118.0.0.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/119.0.0.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.0.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/118.0.0.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/119.0.0.0 Mobile/15E148 Safari/604.1',
  // Safari (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  // Firefox (Android)
  'Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/118.0 Firefox/118.0',
  'Mozilla/5.0 (Android 13; Mobile; rv:109.0) Gecko/119.0 Firefox/119.0',
  'Mozilla/5.0 (Android 14; Mobile; rv:120.0) Gecko/120.0 Firefox/120.0',
  // Firefox (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/118.0 Mobile/15E148 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/119.0 Mobile/15E148 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/120.0 Mobile/15E148 Safari/605.1.15',
  // Samsung Browser (Android)
  'Mozilla/5.0 (Linux; Android 12; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/22.0 Chrome/111.0.5563.116 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.5790.166 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 14; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.5938.140 Mobile Safari/537.36',
  // Edge (Android)
  'Mozilla/5.0 (Linux; Android 12; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36 EdgA/118.0.2088.57',
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36 EdgA/119.0.0.0',
  'Mozilla/5.0 (Linux; Android 14; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 EdgA/120.0.0.0',
  // Edge (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 EdgiOS/118.0.2088.57 Mobile/15E148 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/119.0.0.0 Mobile/15E148 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 EdgiOS/120.0.0.0 Mobile/15E148 Safari/605.1.15',
  // Opera (Android)
  'Mozilla/5.0 (Linux; Android 12; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36 OPR/104.0.0.0',
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36 OPR/105.0.0.0',
  'Mozilla/5.0 (Linux; Android 14; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 OPR/106.0.0.0',
  // Opera (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) OPiOS/119.0.0.0 Mobile/15E148 Safari/605.1.15',
  // Brave (Android)
  'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36 Brave/119.0.0.0',
  // DuckDuckGo (iOS)
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 DuckDuckGo/7 Safari/605.1.15'
];

/**
 * Interface for user agent generation results
 */
export interface IUserAgentResult {
  userAgent: string;
  batchUserAgent?: string[];
}

/**
 * Browser versions for dynamic generation
 */
const browserVersions = {
  chrome: ['118.0.0.0', '119.0.0.0', '120.0.0.0', '121.0.0.0'],
  firefox: ['118.0', '119.0', '120.0', '121.0'],
  safari: ['16.0', '16.5', '17.0', '17.1', '17.2'],
  edge: ['118.0.2088.57', '119.0.0.0', '120.0.0.0', '121.0.0.0'],
  opera: ['104.0.0.0', '105.0.0.0', '106.0.0.0'],
  samsungBrowser: ['22.0', '23.0', '24.0'],
};

/**
 * OS versions for dynamic generation
 */
const osVersions = {
  windows: ['10.0', '11.0'],
  macOS: ['10_15_7', '14_0', '14_1', '14_2'],
  android: ['12', '13', '14'],
  iOS: ['16_0', '16_5', '17_0', '17_1', '17_2'],
};

/**
 * Android device models for dynamic generation
 */
const androidDevices = [
  'SM-S908B', 'SM-G990B', 'SM-A525F', 'SM-A536B', 'Pixel 6', 'Pixel 7', 'Pixel 8',
  'OnePlus 10 Pro', 'OnePlus 11', 'ONEPLUS A6013', 'Xiaomi 12', 'Mi 11', 'Redmi Note 12 Pro',
  'Moto G82', 'Moto G73', 'LM-G900'
];

/**
 * iOS device models for dynamic generation
 */
const iOSDevices = [
  'iPhone', 'iPad', 'iPod'
];

/**
 * Dynamically generate a Chrome user agent
 */
function generateChromeUA(options: { platform: 'desktop' | 'mobile', os?: string } = { platform: 'desktop' }): string {
  const chromeVersion = browserVersions.chrome[Math.floor(Math.random() * browserVersions.chrome.length)];
  
  if (options.platform === 'desktop') {
    const os = options.os || (Math.random() > 0.6 ? 'windows' : (Math.random() > 0.5 ? 'macOS' : 'linux'));
    
    if (os === 'windows') {
      const windowsVersion = osVersions.windows[Math.floor(Math.random() * osVersions.windows.length)];
      return `Mozilla/5.0 (Windows NT ${windowsVersion}; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    } else if (os === 'macOS') {
      const macVersion = osVersions.macOS[Math.floor(Math.random() * osVersions.macOS.length)];
      return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${macVersion}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    } else {
      // Linux
      return `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
    }
  } else {
    // Mobile
    const os = options.os || (Math.random() > 0.5 ? 'android' : 'iOS');
    
    if (os === 'android') {
      const androidVersion = osVersions.android[Math.floor(Math.random() * osVersions.android.length)];
      const device = androidDevices[Math.floor(Math.random() * androidDevices.length)];
      return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${device}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Mobile Safari/537.36`;
    } else {
      // iOS
      const iOSVersion = osVersions.iOS[Math.floor(Math.random() * osVersions.iOS.length)];
      const device = iOSDevices[Math.floor(Math.random() * iOSDevices.length)];
      return `Mozilla/5.0 (${device}; CPU ${device} OS ${iOSVersion} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/${chromeVersion} Mobile/15E148 Safari/604.1`;
    }
  }
}

/**
 * Dynamically generate a Firefox user agent
 */
function generateFirefoxUA(options: { platform: 'desktop' | 'mobile', os?: string } = { platform: 'desktop' }): string {
  const firefoxVersion = browserVersions.firefox[Math.floor(Math.random() * browserVersions.firefox.length)];
  
  if (options.platform === 'desktop') {
    const os = options.os || (Math.random() > 0.6 ? 'windows' : (Math.random() > 0.5 ? 'macOS' : 'linux'));
    
    if (os === 'windows') {
      const windowsVersion = osVersions.windows[Math.floor(Math.random() * osVersions.windows.length)];
      return `Mozilla/5.0 (Windows NT ${windowsVersion}; Win64; x64; rv:${firefoxVersion.split('.')[0]}.0) Gecko/20100101 Firefox/${firefoxVersion}`;
    } else if (os === 'macOS') {
      const macVersion = osVersions.macOS[Math.floor(Math.random() * osVersions.macOS.length)];
      return `Mozilla/5.0 (Macintosh; Intel Mac OS X ${macVersion.replace('_', '.')}; rv:${firefoxVersion.split('.')[0]}.0) Gecko/20100101 Firefox/${firefoxVersion}`;
    } else {
      // Linux
      return `Mozilla/5.0 (X11; Linux x86_64; rv:${firefoxVersion.split('.')[0]}.0) Gecko/20100101 Firefox/${firefoxVersion}`;
    }
  } else {
    // Mobile
    const os = options.os || (Math.random() > 0.5 ? 'android' : 'iOS');
    
    if (os === 'android') {
      const androidVersion = osVersions.android[Math.floor(Math.random() * osVersions.android.length)];
      return `Mozilla/5.0 (Android ${androidVersion}; Mobile; rv:${firefoxVersion.split('.')[0]}.0) Gecko/${firefoxVersion} Firefox/${firefoxVersion}`;
    } else {
      // iOS
      const iOSVersion = osVersions.iOS[Math.floor(Math.random() * osVersions.iOS.length)];
      return `Mozilla/5.0 (iPhone; CPU iPhone OS ${iOSVersion} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/${firefoxVersion} Mobile/15E148 Safari/605.1.15`;
    }
  }
}

/**
 * Generate a completely random, dynamically built user agent
 */
function generateDynamicUserAgent(): string {
  const platform = Math.random() > 0.5 ? 'desktop' : 'mobile';
  const browser = Math.random();
  
  if (browser < 0.4) {
    return generateChromeUA({ platform });
  } else if (browser < 0.7) {
    return generateFirefoxUA({ platform });
  } else {
    // Use pre-defined user agents for other browsers for now
    if (platform === 'desktop') {
      return desktopUserAgents[Math.floor(Math.random() * desktopUserAgents.length)];
    } else {
      return mobileUserAgents[Math.floor(Math.random() * mobileUserAgents.length)];
    }
  }
}

/**
 * Generate random User-Agent header
 */
export function generateUserAgent(parameters: IDataObject): IUserAgentResult {
  const { mode, userAgentType, customUserAgents, useDynamicGeneration } = parameters;
  
  // If dynamic generation is enabled, use that
  if (useDynamicGeneration === true) {
    return {
      userAgent: generateDynamicUserAgent(),
    };
  }
  
  // Select from specified user agent list
  let availableUserAgents: string[] = [];
  
  if (mode === 'random') {
    // Use predefined user agent lists
    if (userAgentType === 'desktop') {
      availableUserAgents = [...desktopUserAgents];
    } else if (userAgentType === 'mobile') {
      availableUserAgents = [...mobileUserAgents];
    } else {
      // All types
      availableUserAgents = [...desktopUserAgents, ...mobileUserAgents];
    }
  } else if (mode === 'custom' && Array.isArray(customUserAgents)) {
    // Use custom user agent list provided by user
    availableUserAgents = [...customUserAgents];
  }
  
  // Ensure we have available user agents
  if (availableUserAgents.length === 0) {
    throw new Error('No User-Agents available');
  }
  
  // Randomly select a user agent
  const randomIndex = Math.floor(Math.random() * availableUserAgents.length);
  const userAgent = availableUserAgents[randomIndex];
  
  return {
    userAgent,
    batchUserAgent: availableUserAgents,
  };
} 