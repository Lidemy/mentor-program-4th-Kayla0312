## hw3：Hoisting  
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。  

```javascript
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```  

1.進入到 `globalEC`，建立 `globalVO`、`scope chain`。依序將 arguments、funcion、variable 開始初始化所有變數及函式宣告。  

```javascript
globalEC
globalVO: {
    fn: function,
    a: undefined,
}
```
2. 執行第 1 行：`var a = 1`，將 `globalVO` 中的 a 賦值為 1。  
```javascript
globalEC
globalVO: {
    fn: function,
    a: 1,
}
```
3. 執行第 16 行：呼叫`fn()`。  
5. 執行第 2 行：進入 `fn()`，並建立 `fn()` Active context 與初始化 Scope Chain。  
```javascript
fnEC
fnAO: {
    fn2: function,
    a: undefined,
}

globalEC
globalVO: {
    fn: function,
    a: 1,
}
```
6. 執行第 3 行：開始執行 `function fn()` 內程式碼，`console.log(a)`，輸出 undefined。  
7. 執行第 4 行：`var a = 5`，賦值 a 為 5。  
```javascript
fnEC
fnAO: {
    fn2:  function,
    a: 5,
}

globalEC
globalVO: {
    fn:  function,
    a: 1,
}
```  
8. 執行第 5 行：`console.log(a)`，找到 `fnVo` 中的 `a`，輸出 5。  
9. 執行第 6 行：`a++`， `fnVo` 中的 `a` 更改為 6。  
```javascript
fnEC
fnAO: {
    fn2: function,
    a: 6,
}

globalEC
globalVO: {
    fn: function,
    a: 1,
}
```
10. 執行第 7 行：`var a`，僅宣告變數 a，未賦值，不動作。  
11. 執行第 8 行：呼叫 `fn2()`。
12. 執行第 10 行：`fn2()`。進入 `fn2EC` Execution Conrent 與初始化 `fn2VO` Scope Chain。未有任何參數與變數函示宣告，因此 `fn2VO` 內是空的。  
```javascript
fn2EC
fn2AO: {

}

fnEC
fnAO: {
    fn2:  function,
    a: 6,
}

globalEC
globalVO: {
    fn:  function,
    a: 1,
}
```
12. 執行第 11 行：`console.log(a)`，輸出 6。`fn2VO` 中找不到 a 的值，於是往上層找到 `fnVO:{a: 6}`。  
13. 執行第 12 行：`a = 20`，往上層找到 `fnVO:{a:6}`，賦值 a 為 20。  
14. 執行第 13 行：`b = 100`，目前尚未宣告和初始化過 b，於是會在 `globalVO` 建立 `globalVO:{b:100}`，並結束 `fn2` 迴圈。  
```javascript
fn2EC
fn2AO: {

}

fnEC
fnAO: {
    fn2:  function,
    a: 20,
}

globalEC
globalVO: {
    fn:  function,
    a: 1,
    b: 100,
}
```
15. 執行第 9 行：`console.log(a)`，找到 `fnVO` 中的 `fnVO:{a :6,}`，輸出 6。並結束 fn() scope chin。   
16. 執行第 17 行：`console.log(a)`，輸出 1。因為已經結束 fn scope，於是這邊的 a 會是 global scope 中 `globlaVO{a: 1,}`。  
17. 執行第 18 行：`a = 10`，重新賦值 global scope 的 a 為 10。 `{globalVO: a: 10,}`。  
```javascript
fn2EC
fn2AO: {

}

fnEC
fnAO: {
    fn2:  function,
    a: 20,
}

globalEC
globalVO: {
    fn:  function,
    a: 10,
    b: 100,
}
```
18. 執行第 19 行：`console.log(a)`，找到 `globalVO: {a: 10,}`，輸出10。  
19. 執行第 20 行：`console.log(b)`，找到 `globalVO: {b: 100,}`，輸出100。  

最終輸出結果：  
```javaScript
undefined
5
5 
6
1
20
100
```