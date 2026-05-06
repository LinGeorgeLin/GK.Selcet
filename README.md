# G.K Select - Next.js

原 Create React App 專案已遷移至 **Next.js 14（App Router）**。

## 專案結構

```
gk-select/
├── app/
│   ├── layout.js          ← 根 Layout（含 Navbar、Copyright）
│   ├── globals.css        ← 全域 CSS（原 index.css + App.css 合併）
│   ├── page.js            ← 首頁 /
│   ├── men/page.js        ← /men
│   ├── women/page.js      ← /women（Coming Soon）
│   ├── kids/page.js       ← /kids（Coming Soon）
│   ├── login/page.js      ← /login（Coming Soon）
│   ├── signup/page.js     ← /signup（Coming Soon）
│   └── contact/page.js    ← /contact
├── components/
│   ├── Navbar.js
│   ├── Copyright.js
│   ├── SearchBar.js
│   ├── HomeAds.js
│   └── ComingSoon.js
├── photos/
│   └── photo.js           ← ⚠️ 請自行複製原本的 photo.js
├── public/
│   └── photos/            ← ⚠️ 請將 /src/photos/ 內的圖片複製至此
├── next.config.js
└── package.json
```

## 主要變更說明

| 原 CRA | Next.js |
|--------|---------|
| `react-router-dom` | Next.js 內建 file-based routing |
| `<BrowserRouter>` / `<Routes>` / `<Route>` | `app/` 資料夾結構 |
| `<a href="...">` 內部連結 | `<Link href="...">` from `next/link` |
| `class=` | `className=` |
| `index.js` + `App.js` | `app/layout.js` |
| `index.css` + `App.css` | `app/globals.css` |
| `require('../photos/...')` | `/public/photos/` 靜態資源 |
| 有 `useState` 的元件 | 加上 `'use client'` 指令 |

## 啟動步驟

```bash
npm install
npm run dev
```

## ⚠️ 需要手動處理

1. **photos 資料夾**：將原本 `src/photos/` 內的所有圖片複製到 `public/photos/`
2. **photo.js**：複製原本的 `src/photos/photo.js` 到 `photos/photo.js`，路徑引用改為 `/photos/...`（public 靜態路徑）
3. **Logo 圖片**：`globals.css` 內的 `url(./photos/GK Select.png)` 改為 `url('/photos/GK Select.png')`
