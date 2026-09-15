# 部署上線指南（3 選 1，都免費）

網站是純靜態檔（HTML/CSS/JS），不需要伺服器，任何靜態主機都能放。

---

## 選項 A：Cloudflare Pages（推薦，快、免費、有 HTTPS）
1. 註冊 https://dash.cloudflare.com
2. 左側 **Workers & Pages → Create → Pages → Upload assets**
3. 把 **整個 `didog-site/` 資料夾**（含 index.html）拖進去
4. 按 Deploy → 得到 `https://xxx.pages.dev` 網址
5. 要綁自己的網域：Pages → Custom domains → 輸入 `didog.trucop.com`

## 選項 B：Netlify Drop（最快，不用裝東西）
1. 開 https://app.netlify.com/drop
2. 把 `didog-site/` 資料夾拖進網頁
3. 立刻得到 `https://xxx.netlify.app` 網址（`netlify.toml` 已放好快取/安全標頭）
4. Site settings → Domain management → 綁自訂網域

## 選項 C：GitHub Pages（想用 git 管版）
```bash
cd didog-site
git init && git add . && git commit -m "init site"
git branch -M main
git remote add origin git@github.com:<你的帳號>/didog-site.git
git push -u origin main
```
→ repo **Settings → Pages → Source: main / root** → 得到 `https://<帳號>.github.io/didog-site/`

---

## 上線前檢查清單
- [ ] `js/main.js` 的 `BOOKING_URL` 填上線上訂位網址
- [ ] `assets/logo.svg` 換成官方 logo
- [ ] `assets/img/` 換成實拍照片（覆蓋同檔名）
- [ ] 中和環球概念店**地址/營業時間**確認後更新（index.html、menu.html 頁尾）
- [ ] `sitemap.xml` / `robots.txt` / JSON-LD 裡的網址改成你的正式網域
- [ ] 用正式菜單更新 `menu.html`

## 網域
- 已有 `didog.trucop.com`？直接把 DNS 指到主機（Cloudflare 最快）
- 沒有？可在 Cloudflare / Gandi / Namecheap 註冊 `.com.tw`

## 需要我幫你按哪個？
Cloudflare Pages 最順（自帶 CDN + HTTPS + 免費）。你只要給我一個帳號或授權，我可以一步步帶你按；或你照上面自己點也很簡單。
