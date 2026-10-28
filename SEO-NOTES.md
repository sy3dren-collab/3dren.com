# 搜尋曝光與上線檢查

## 目前設定

- 正式網址依現有 CNAME 使用 https://www.3dren.com.tw/ 。上線前確認這是要經營的網域，且 HTTPS 可正常開啟。若更換網域，同步更新 CNAME、canonical、社群標籤、JSON-LD、robots.txt 與 sitemap.xml；舊網域的重新導向需在網域／主機端設定。
- 網站為靜態檔案，無需 npm 安裝或建置；`python -m http.server 8000 --bind 127.0.0.1` 可供本機檢查。
- 原始作品保留，480px／960px WebP 衍生圖供響應式載入；分享圖為 1200×630 JPEG。更新作品時需一併更新縮圖與實際內容描述。
- 保留既有 GA4 設定；contact_click 記錄 LINE、電話、Email 連結點擊意圖，不代表完成詢價。
- 沒有加入未經確認的地址、案例地點、客戶推薦或評分。FAQ 結構化資料與頁面文字一致，但不保證搜尋結果顯示 FAQ。

## 上線後由網站擁有人執行

1. 在 Google Search Console 驗證網域所有權，提交 https://www.3dren.com.tw/sitemap.xml，對首頁使用網址檢查並確認可索引。
2. 確認 GitHub Pages 的自訂網域與 HTTPS 設定，測試首頁、分享圖、robots.txt、sitemap.xml，以及 LINE 加好友是否到達正確帳號。
3. 用 PageSpeed Insights 檢查正式網址的手機體驗；使用 LINE／Facebook 分享工具重新抓取預覽快取。
4. 在 GA4 DebugView 或即時報表確認 contact_click。依實際需求將詢價相關事件設為重要事件；網站擁有人應依受眾、法規與實際資料處理方式決定隱私告知和同意機制。
5. 持續新增經授權公開的獨立作品案例頁，每篇包含實際空間類型、需求、材質與燈光處理、製作範圍及圖片；勿只複製關鍵字或杜撰地點。建立頁面後加入站內連結與 sitemap。
6. 每月觀察 Search Console 的搜尋字詞、曝光、點擊與 GA4 詢價點擊。以資料決定下一篇案例與標題調整，勿以排名或流量提升作保證。

此次只完成儲存庫內調整與本機驗證，未部署網站，也未驗證 Search Console 或正式站索引。
