# User Agent Random 節點使用指南

本文檔提供有關如何使用 User Agent Random 節點的詳細說明。

## 概述

User Agent Random 節點可以生成隨機的瀏覽器 User-Agent 字符串，用於 HTTP 請求。這在進行網頁爬蟲或 API 請求時非常有用，可以幫助避免被目標網站識別為自動化工具。

## 基本配置

在 n8n 工作流中添加 User Agent Random 節點後，您可以配置以下選項：

### 1. 模式

- **隨機 (預定義庫)**：從內置的 User-Agent 庫中隨機選擇，包含了常見的桌面和移動瀏覽器。
- **動態生成**：動態創建具有隨機組件的新 User-Agent 字符串。
- **自定義**：允許您提供自己的 User-Agent 列表，節點將從中隨機選擇。

### 2. User-Agent 類型 (僅適用於"隨機"模式)

- **桌面瀏覽器**：Chrome, Firefox, Safari, Edge 等桌面瀏覽器的 User-Agent。
- **移動設備瀏覽器**：iOS 和 Android 設備上的移動瀏覽器 User-Agent。
- **所有類型**：包含所有支持的瀏覽器類型。

### 3. 自定義 User-Agent 列表 (僅適用於"自定義"模式)

在此文本區域中，您可以輸入自己的 User-Agent 字符串列表，每行一個。例如：

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36
```

### 4. 隨機化頻率

- **每個請求**：每次執行節點時使用新的隨機 User-Agent。
- **每個批次**：同一批次處理的所有項目使用相同的 User-Agent。
- **每個工作流執行**：整個工作流執行期間使用相同的 User-Agent。

### 5. 輸出方式

- **僅輸出 User-Agent**：僅返回生成的 User-Agent 字符串，替換原始輸入。
- **添加為項目屬性**：將 User-Agent 添加為輸入項目的屬性，保留原始數據。
- **創建完整的 HTTP 頭部**：創建包含 User-Agent 的完整 HTTP 頭部對象。

## 使用場景

### 1. 與 HTTP Request 節點結合使用

1. 添加 User Agent Random 節點
2. 設置輸出方式為"創建完整的 HTTP 頭部"
3. 將輸出連接到 HTTP Request 節點
4. HTTP Request 節點將自動使用生成的隨機 User-Agent

### 2. 批量爬蟲請求

1. 設置隨機化頻率為"每個批次"
2. 使用 Split In Batches 節點將請求分批處理
3. 每個批次將使用一個獨特的 User-Agent，同批次內的請求使用相同 User-Agent

### 3. 長時間運行的輪詢工作流

1. 設置隨機化頻率為"每個工作流執行"
2. 每次工作流執行都將使用一個新的隨機 User-Agent

## 高級技巧

### 與代理服務器結合使用

為最大程度減少被檢測或封鎖的風險，可以結合以下方法：

1. 使用 User Agent Random 節點生成隨機 User-Agent
2. 使用 HTTP Proxy 節點或類似功能設置代理服務器
3. 在重要請求之間添加隨機延遲

### 自定義 User-Agent 最佳實踐

建立自定義 User-Agent 列表時，請考慮以下建議：

1. 包含最近版本的主流瀏覽器
2. 針對您的目標網站優化 User-Agent（某些網站可能對特定瀏覽器提供更好的體驗）
3. 避免使用太多不同類型的 User-Agent，這可能看起來不自然

## 常見問題解答

### Q: 自定義 User-Agent 列表為空時會發生什麼？

A: 如果您選擇了自定義模式但未提供任何 User-Agent，節點將自動使用預定義庫中的桌面瀏覽器 User-Agent，並記錄一條警告。

### Q: 如何知道當前正在使用哪個 User-Agent？

A: 您可以添加一個 Debug 節點來查看生成的 User-Agent 數據。

### Q: 是否可以在工作流的不同部分使用不同的隨機 User-Agent？

A: 是的，您可以在工作流中的不同位置添加多個 User Agent Random 節點，每個節點可以有不同的配置。

## 示例

以下是一個簡單的示例工作流：

1. Cron 節點 (每小時觸發)
2. User Agent Random 節點 (設置為隨機桌面瀏覽器，每次工作流執行)
3. HTTP Request 節點 (訪問目標網站)
4. 處理響應數據...

以上配置將使工作流每小時執行一次，每次使用不同的桌面瀏覽器 User-Agent 訪問目標網站。 