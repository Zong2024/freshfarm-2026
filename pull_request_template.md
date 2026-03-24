# Pull Request: 實作會員登入系統與結帳流程重構

## Summary

本 PR 實作了完整的會員登入系統，並重構了購物車與結帳流程，以提供更流暢且安全的使用者體驗。新增了付款頁面以完成訂單流程。

## Key Changes

### 1. 會員登入系統 (Auth System)

- **Feature**: 新增 `AuthContext` 管理全域登入狀態 (`isAuth`, `user`)。
- **Feature**: 實作 `Login` 頁面，串接後端登入 API。
- **Refactor**: 修改 `api.js` Interceptor，自動於 Header 帶入 Token，並處理 401 自動登出。
- **UI**: `Navbar` 新增登入/登出狀態切換，顯示使用者名稱。

### 2. 購物車與結帳流程 (Checkout Flow)

- **Refactor**: 將購物車頁面拆分為：
  - `/cart`: 純購物車列表 (公開，未登入可見)。
  - `/checkout`: 純結帳表單 (受保護，需登入)。
- **Feature**: 實作路由守衛 (Auth Guard)，未登入者嘗試結帳時自動導向登入頁。
- **Fix**: 修復 `StepperSection` 步驟條狀態不更新的 Bug。

### 3. 訂單與付款 (Order & Payment)

- **Feature**: 新增 `order.api.js` 處理訂單相關請求。
- **Feature**: `FormSection` 串接 `createOrder` API，成功後跳轉至付款頁。
- **Feature**: 新增 `/payment/:orderId` 頁面，顯示訂單明細並提供付款功能。

### 4. 其他 (Misc)

- **Refactor**: 抽離 `Toast` (SweetAlert2) 設定至 `src/utils/toast.js`，統一全站風格。
- **Refactor**: `CartContext` 改用通用 `Toast` 工具。

## How to Test

1. 進入首頁，點擊 Navbar 的「登入/註冊」，使用測試帳號登入。
2. 加入商品至購物車，點擊「購物車」進入 `/cart` 頁面。
3. 點擊「前往結帳」，應跳轉至 `/checkout` 頁面 (若未登入則跳轉至登入頁)。
4. 填寫收件資訊並送出，應跳轉至 `/payment/:orderId` 頁面。
5. 確認訂單資訊無誤後，點擊「確認付款」。
