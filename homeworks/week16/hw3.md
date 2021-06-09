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

1.進入到 globalEC，建立 globalVO、scope chain。依序將 arguments、funcion、variable 開始初始化所有變數及函式宣告。  

```javascript
globalEC:{
  globalVO: {
    fn: function,
    a: undefined
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```
2. 執行第 1 行：`var a = 1`，將 `globalVO` 中的 a 賦值為 1。  
```javascript
globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```
3. 執行第 16 行：呼叫`fn()`。  
5. 執行第 2 行：進入 `fn()`，並建立 `fn()` EC 與初始化 Scope Chain。  
```javascript
fnEC: {
  fnAO: {
    fn2: function,
    a: undefined
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```
6. 執行第 3 行：開始執行 `function fn()` 內程式碼，`console.log(a)`，目前在 fnAO 的 a 尚未給予值，輸出 undefined。  
7. 執行第 4 行：`var a = 5`，fnAO a 賦值為 5。  
```javascript
fnEC: {
  fnAO: {
    fn2: function,
    a: 5
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```  
8. 執行第 5 行：`console.log(a)`，找到 fnAo a，輸出 5。  
9. 執行第 6 行：`a++`，將 fnAo a 值更改為 6。  
```javascript
fnEC: {
  fnAO: {
    fn2: function,
    a: 6
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
``` 
10. 執行第 7 行：`var a`，僅宣告變數 a，未賦值，不動作。  
11. 執行第 8 行：呼叫 `fn2()`。
12. 執行第 10 行：`fn2()`。進入 fn2EC，初始化與建立 Scope Chain。因為未有任何參數與變數函示宣告，因此 fn2AO 內是空的。  
```javascript
fn2EC: {
  fn2AO: {
    //未宣告變數
  }
  scopeChain: [fn2EC.AO, fn2.[[Scope]]]
}

fnEC: {
  fnAO: {
    fn2: function,
    a: 6
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
``` 
12. 執行第 11 行：`console.log(a)`，fn2AO 中找不到 a，於是往上層找到 `fnAO:{a: 6}`，輸出 6。  
13. 執行第 12 行：`a = 20`，往上層找到 `fnAO:{a:6}`，賦值 a 為 20。 
```javascript
fn2EC: {
  fn2AO: {
    //未宣告變數
  }
  scopeChain: [fn2EC.AO, fn2.[[Scope]]]
}

fnEC: {
  fnAO: {
    fn2: function,
    a: 20
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```  
14. 執行第 13 行：`b = 100`，目前尚未宣告和初始化過 b，於是會在 `globalVO` 建立 `globalVO:{b:100}`，並將 `fn2` pop off stack 。  
```javascript
fnEC: {
  fnAO: {
    fn2: function,
    a: 20
  }
  scopeChain: [fnEC.AO, globalEC.VO]
}
fn2.[[Scope]] = fnEC.scopeChain = [fnEC.AO, globalEC.VO]

globalEC:{
  globalVO: {
    fn: function,
    a: 1,
    b:100
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
``` 
15. 執行第 9 行：執行 `console.log(a)`，找到 `fnAO{a:20}`，輸出 20，並 pop off fnEC。  
```javascript
globalEC:{
  globalVO: {
    fn: function,
    a: 1,
    b:100
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
```  
16. 執行第 17 行：`console.log(a)`，找到 `globalEC{a:1}`，輸出 1。
17. 執行第 18 行：`a = 10`，重新賦值 `{globalVO: a: 1}` 中的 ａ 為 10。 。 
```javascript
globalEC:{
  globalVO: {
    fn: function,
    a: 10,
    b:100
  }
  scopeChain: [globalEC.VO]
}
fn.[[Scope]] = globalEC.scopeChain = [globalEC.VO]
``` 
18. 執行第 19 行：`console.log(a)`，找到 `globalVO: {a: 10}`，輸出10。  
19. 執行第 20 行：`console.log(b)`，找到 `globalVO: {b: 100}`，輸出100。  

最終輸出結果：  
```javaScript
undefined
5
6
20
1
10
100
```