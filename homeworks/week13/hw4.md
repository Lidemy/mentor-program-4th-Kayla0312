## Webpack 是做什麼用的？可以不用它嗎？
Ｍodule Bundeler，從字面上意指將模組（指*任何資源*，例如CSS, JS, HTML 檔 / 圖檔（jpg, png） / Plugin ) 打包，在打包前會經過 Loader 把資源載入到 Webpack（例如：使用 Babel loader 轉換 JS)，打包成一個 JavaScript 檔。  

為何會需要打包檔案？原因在於瀏覽器，以前並沒有支援像是 Require 之類的東西。雖然也可以不使用，但在資源的整合和檔案相容性、維護性上，使用還是較為方便，

## gulp 跟 webpack 有什麼不一樣？  
雖然在某些功能上來說，兩者皆能夠做到 **相同資源的轉換** （minify、將 ES6 轉換成 ES5、sass 轉換），但在定位上還是不同的。  

**Gulp -**  
  * 定位：Task manger（流程管理)
  * task 可以自定義成任何東西，Gulp 只是用來管理這些 Task。  
  * 本身做不到 Bundle。但可透過 Webpack Plugin 去做到。  
  * 配置不同的 Task，自定義執行順序，管理整個流程。
**Webpack -**
  * 定位：將資源 Bundle 一起。  
  * 某些 Task Webpack 並無法做到。例如 Call API。   
  * 透過 Loader、Plugin 統整各種資源的轉換，按照依賴和規則打包成符合生產環境部署的前端資源。

## CSS Selector 權重的計算方式為何？  
1. !important
2. inline style
3. Id
4. Class / Psuedo-Class 偽類 / Attribute 屬性選擇器
5. Element