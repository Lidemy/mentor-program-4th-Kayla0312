## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼  
**VARCHAR:** 可設定最大長度，適合用於文字量確定時。  
**TEXT:** 按照字符的數量來決定要佔用多少空間，當不知道屬性的最大長度時適用。  

**差異：**  
* 查詢速度：VARCHAR > TEXT  
* 記錄數據的大小：皆以字符長度佔用空間，但 VARCHAR 會有 1-2 個字節來記錄數據大小。  
* 設定默認值：TEXT無法設定，而 VARCHAR 在超出默認值時，則會自動砍掉多餘的。  

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
當我們在網路購物時，最後結帳的時候，是怎麼記住最後買了什麼？  
HTTP 並沒有想像中的會記憶，反而什麼都記不住。這些資料的記憶，全靠著背後的 session 作為橋樑，透過其中一種叫做 cookie 的方式在記憶資訊。  
  
設定 cookie 與 將資訊帶去 Sever 的過程：  
1. 瀏覽器發出 Request  
2. Sever 叫瀏覽器設 cookie 儲存購買資訊  
3. 瀏覽器儲存了資訊，發 Request 給 Sever，這時 Sever 就能知道購物車裡放了什麼東西  

![](https://i.imgur.com/re1OAcB.png)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
* 儲存的是明碼：如果入侵了資料庫，資料一目了然，應該需要再經過處理，不讓使用者真正的密碼直接顯示出來。  
* SQL injection  

參考資料：  
[從關鍵字認識資安 1 — 網路威脅](https://medium.com/hannah-lin%E5%BE%9E%E9%97%9C%E9%8D%B5%E5%AD%97%E8%AA%8D%E8%AD%98%E8%B3%87%E5%AE%89-1-%E7%B6%B2%E8%B7%AF%E5%A8%81%E8%84%85-bf07fd7a4beb)  

[一次看懂 SQL Injection 的攻擊原理](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/%E6%B7%BA%E8%AB%87%E9%A7%AD%E5%AE%A2%E6%94%BB%E6%93%8A-%E7%B6%B2%E7%AB%99%E5%AE%89%E5%85%A8-%E4%B8%80%E6%AC%A1%E7%9C%8B%E6%87%82-sql-injection-%E7%9A%84%E6%94%BB%E6%93%8A%E5%8E%9F%E7%90%86-b1994fd2392a)