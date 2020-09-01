## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。  
* `<cite>` : 文獻的引用或標記作品的標題。  
* `<em>` : 表示強調的內容。雖然在瀏覽器和 `<i>` 一樣外觀顯示為斜體樣式，但多了強調語意意思。
* `<hr>` : 分隔線。  

## 請問什麼是盒模型（box model）  
在 HTML 中，每個元素都可視為一個盒子，利用 CSS 去調整樣式屬性，包含 width、border、padding、margin…　　
    * 內容 content-box
    * 內距 paddind-box
    * 邊框 boder-box
    * 外距 margin-box  

## 請問 display: inline, block 跟 inline-block 的差別是什麼？  
* display: inline：元素排在同一列，當超出寬度時，才會換行排列。EX：`span`、`a`  
    * 設定`width` 和 `height` 不起作用。  
    * 使用 `padding`、`margin`、`border` 會生效，但不會造成其他元素位置變動。  
    
* display: block：元素佔滿一整行。EX：`div`、`h1`、`p`  
    * `width` 和 `height` 設定可發揮作用。  
    * `padding`、`margin`、`border` 會向周圍 “推開”，影響其他元素。  
　　
* display: inline-block  
    * 同時擁有 inline 將元素並排一列 和 block 設定寬高的特性。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static：預設的定位方式。  
* relative：根據元素原本的定位點，利用`top`、`bottom` `left`、`right`去調整偏移位置。EX: 要將元素做偏移時使用。  
* absolute（絕對定位）：從上層找到第一個 position 作為基準點。若沒有設定就會以 body 作為參考點。EX: 購物網站圖片上方角落的特價標籤。  
* fixed（固定定位）：相對於 viewport 去做定位，EX: 購物網站固定在 viewport 右下角方便結帳的按鈕。