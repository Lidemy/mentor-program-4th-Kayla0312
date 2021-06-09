## hw2：Event Loop + Scope  

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。  

```javaScript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
1. 執行第 1 行：，進入第一圈迴圈，`i=0`，且符合條件 `i<5`。  
2. 執行第 2 行：`console.log('i: ' + i)`，印出 `i:0`。   
  3. 執行第 3 行：執行`setTimeout` pop in stack，在等待 timer 計時 0 秒結束後，。將 `() => {console.log(i)}` 擱置在 task queue 等待 stack 任務皆執行完。`setTimeout` pop off stack。   
4. 執行第 1 行：進入第二圈迴圈，`i=1`，且符合條件 `i<5`。  
5. 執行第 2 行：`console.log('i: ' + i)`，印出 `i:1`。
6. 執行第 3 行：同上第三點方式執行 setTimeout，計時時間變更為 1 秒。  
7. 執行第 1 行：進入第三圈迴圈，`i=2`，且符合條件 `i<5`。  
8. 執行第 2 行：`console.log('i: ' + i)`，印出 `i:2`。  
9. 執行第 3 行：同上第三點方式執行 setTimeout，計時時間變更為 2 秒。  
10. 執行第 1 行：進入第四圈迴圈，`i=3`，且符合條件 `i<5`。  
11. 執行第 2 行：`console.log('i: ' + i)`，印出 `i:3`。  
12. 執行第 3 行：同上第三點方式執行 setTimeout，計時時間變更為 3 秒。  
13. 執行第 1 行：`i=4`，且符合條件 `i<5`，進入第五圈迴圈。  
14. 執行第 2 行：`console.log('i: ' + i)`，印出 i:4。  
15. 執行第 3 行：同上第三點方式執行 setTimeout，計時時間變更為 4 秒。  
16. 執行第 1 行：`i=5`，此時 i 不符合條件 `i<5`，跳出迴圈。  
17. 確認 Stack 為空的時，將原先放置在 task queue 待執行的第 4 行 `console.log(i)`，依序執行。此時因迴圈最後結束時 i=5，並且在 task queue 有五項待執行的`console.log(i)`，最後會輸出 5 次 5。 

輸出結果：    
```javascript
i:0
i:1
i:2
i:3
i:4
5
5
5
5
5
```