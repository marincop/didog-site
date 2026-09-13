# 蘇記嘀兜雞 Di Do G｜中和環球概念店 — 官方網站

參考 [hotpot106.com.tw](https://www.hotpot106.com.tw) 的深色×金色質感，重新實作的靜態一頁式網站。

## 檔案結構
```
didog-site/
├─ index.html          主頁（所有文字內容）
├─ css/style.css       樣式（顏色、字體、版型）
├─ js/main.js          互動（選單、捲動、訂位連結、動畫）
├─ assets/
│  ├─ logo.svg         品牌標誌（暫代，可換成真 logo）
│  └─ img/             照片素材（暫代圖庫圖，請換成實拍）
└─ README.md
```

## 本機預覽
```bash
cd didog-site
python3 -m http.server 8080
# 開啟 http://localhost:8080
```

## 上線（免費選項）
- **Cloudflare Pages / Netlify / Vercel**：把整個 `didog-site/` 資料夾拖拉上傳即可
- **GitHub Pages**：推到 repo → Settings → Pages → 選 branch

## 你要改的地方（3 分鐘）
1. **線上訂位網址** → 已設定為 `https://marincop-didog01.hf.space/booking/`（在 `js/main.js` 的 `BOOKING_URL`）。
2. **Logo** → 用你的真 logo 覆蓋 `assets/logo.svg`（或改成 .png 並在 `index.html` 調整檔名）
3. **照片** → 把實拍照片放進 `assets/img/`，覆蓋下列檔名即可：
   - `hero.jpg`（首頁大圖，建議 1600×900 以上、深色系）
   - `dish-1.jpg` ~ `dish-4.jpg`（招牌/菜色，建議 900×700）
   - `store-1.jpg`、`store-2.jpg`（店內環境，建議 900×700）
4. **文字/地址/電話** → 直接編輯 `index.html`（搜尋 `中和環球`）

## ⚠️ 待你確認的資料
- **中和環球概念店地址**：目前暫填「新北市中和區中山路三段112號（Global Mall 中和）」，請確認正確樓層/櫃位
- **中和環球概念店營業時間**：暫填「依商場營業時間」，請補上實際時間
- 已設定：線上訂位網址 https://marincop-didog01.hf.space/booking/
- 已查證：中和景平總店 新北市中和區景平路154號、02-8228-6658、17:00–00:00

## 素材授權提醒
`assets/img/` 目前是**免費圖庫佔位圖**，僅供版面示意。上線前請換成**店家自有實拍或已授權**的照片。

---
Built by Coder 👨‍💻
