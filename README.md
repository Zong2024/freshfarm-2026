# 開發環境

1. 安裝 VSCode 擴充：
   - ESLint
   - Prettier

2. 專案初始化

   ```bash
   npm install
   npm run dev
   ```

Husky 會在 commit 前自動執行 lint，失敗會擋掉 commit；如果想手動檢查整個專案可跑 npm run lint
