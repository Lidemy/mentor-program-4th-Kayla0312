## hw1：Event Loop
在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。  

```JavaScript
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```  
1. 執行第 1 行：`console.log(1)` 進入 Call Stack，執行並印出 `1`，pop off stack。  
2. 執行第 2 行：`setTimeout` 進入 call stack，在呼叫 setTimeout 後，瀏覽器會去設定 timer，並在 0 秒計時結束後，將`() => {console.log(2)}` 擱置在 task queue。最後將`setTimeout()` pop off stack。  
4. 執行第 5 行：`console.log(3)` 進入 Call Stack，執行並印出 `3`，pop off stack。  
5. 執行第 6 行：同第二點執行方式，將`() => {console.log(4)}` 擱置在 task queue，最後將`setTimeout()` pop off stack。  
6. 執行第 9 行：`console.log(5)` 進入 Call Stack，執行並印出 `5`，pop off stack。  
7. 執行第 3 行：目前 stack 已經是空的，開始將擱置在 task queue 的 function pop in stack，執行`console.log(2)`，印出 `2` 後，pop off。  
8. 執行第 7 行：將在 task queue 的 function pop in stack，執行`console.log(4)`，印出 `4` 後，pop off。
9. 結束程式執行。  

輸出結果：    
```javascript
1
3
5
2
4
```