# n8n User Agent Random 節點

這個社群節點包提供了 n8n 的隨機 User-Agent 功能，幫助您在進行網頁請求時模擬各種瀏覽器和設備。此版本已移除 webhook 功能。

[n8n](https://n8n.io/) 是一個免費的開源工作流自動化工具。

## 功能特色

- 支援從預定義的 User-Agent 庫中隨機選擇
- 可選擇桌面瀏覽器或移動設備瀏覽器的 User-Agents
- 動態生成具有隨機組件的 User-Agents
- 支援自定義 User-Agent 列表
- 與 HTTP Request 節點無縫整合
- 使用 n8n 最新的聲明式節點架構

## 安裝方法

### 社群節點安裝（推薦）

對於大多數用戶，使用 n8n 的社群節點功能安裝是最簡單的方法：

1. 打開您的 n8n 實例
2. 點擊右上角的設置按鈕
3. 選擇「社群節點」
4. 搜索「n8n-nodes-user-agent-random」
5. 點擊安裝

### 從源碼安裝

或者，您可以直接從源碼安裝：

```bash
# 全局安裝 n8n（如果尚未安裝）
npm install n8n -g

# 安裝此節點包
npm install n8n-nodes-user-agent-random -g

# 啟動 n8n
n8n start
```

## 使用方法

安裝後，您可以在 n8n 的工作流編輯器中使用「User Agent Random」節點。

### 基本配置

1. 將「User Agent Random」節點添加到您的工作流中
2. 配置以下選項：
   - **模式**：選擇「隨機」、「動態生成」或「自定義」
   - **User-Agent 類型**：如果使用隨機模式，選擇「桌面瀏覽器」、「移動瀏覽器」或「所有類型」
   - **自定義 User-Agent 列表**：如果使用自定義模式，每行輸入一個 User-Agent
   - **輸出方式**：選擇「僅 User-Agent」、「添加為項目屬性」或「創建完整 HTTP 標頭」

### 模式選項

* **隨機**：從大型預定義的 User-Agent 庫中選擇
* **動態生成**：通過組合各種瀏覽器、操作系統和設備組件，即時創建全新的 User-Agent
* **自定義**：使用您自己的 User-Agent 列表

### 輸出選項

* **僅 User-Agent**：節點僅返回 User-Agent 字串
* **添加為項目屬性**：將 User-Agent 添加到輸入項目的指定屬性
* **創建完整 HTTP 標頭**：生成包含 User-Agent 的完整 HTTP 標頭對象

### 範例工作流

* **基本爬蟲**：使用 User Agent Random 節點設置 HTTP Request 節點標頭
* **API 輪詢**：在長時間運行的工作流中定期切換 User-Agent 以避免速率限制
* **多請求批處理**：為每個 HTTP 請求生成不同的 User-Agent 以增加請求多樣性

## 支援的瀏覽器和設備

預定義的 User-Agent 庫包括：

### 桌面瀏覽器
- Chrome（Windows/Mac/Linux）
- Firefox（Windows/Mac/Linux）
- Safari（Mac）
- Edge（Windows/Mac）
- Opera（Windows/Mac）
- Brave（Windows/Mac）
- Vivaldi（Windows/Mac）

### 移動設備瀏覽器
- Chrome（Android/iOS）
- Safari（iOS）
- Firefox（Android/iOS）
- Samsung Browser（Android）
- Edge（Android/iOS）
- Opera（Android/iOS）
- Brave（Android）
- DuckDuckGo（iOS）

## 動態生成

動態生成模式可以通過組合以下元素創建幾乎無限種 User-Agent 變體：

- 不同的瀏覽器類型（Chrome、Firefox、Safari、Edge 等）
- 各種瀏覽器版本
- 多種操作系統（Windows、macOS、Linux、Android、iOS）
- 不同的操作系統版本
- 各種設備型號（用於移動設備 User-Agent）

這有助於創建更多樣化和真實的 User-Agent，而這些可能不在標準庫中。

## 技術細節

此節點使用聲明式節點風格開發，完全符合 n8n 最新的開發模式和規範。它不依賴任何外部 API，所有功能均在本地執行。

## 授權

[MIT](https://github.com/FunTW/n8n-nodes-user-agent-random/blob/main/LICENSE) 