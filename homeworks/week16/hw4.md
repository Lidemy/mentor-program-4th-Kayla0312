## hw4：What is this?
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ?? obj.inner.hello.call(obj.inner) =>2
obj2.hello() // ?? obj2.hello.call()=> 2
hello() // hello.call() => undefined
```
可以利用 `.call()` 的方式來呼叫 function，`.call()`傳入的第一個參數，即是指向 this 的值。  
1. `obj.inner.hello()`
```javaScript
obj.inner.hello()

// 轉換為 .call() 形式呼叫
obj.inner.hello.call(obj.inner);
```
this 指向 `obj.inner`，`console.log(obj.inner)`;結果會是 2。  

2. `obj2.hello();` 
```javaScript
obj2.hello(); 

// 轉換為 .call() 形式
obj2.hello.call(obj2.hello);
```
this 指向 `obj2.hello`，`console.log(obj2.hello)`; 結果會是 2。  

3. `hello()`  
```javaScript
'use strict'  //嚴格模式
hello();

// 轉換為 .call() 形式
hello.call(hello);
```  

this 指向 `hello`，`console.log(hello)`; 在使用 `use strict` 嚴格模式下結果會是 undefined，這邊的 this 指向全域，node.js 執行環境中會是 global，瀏覽器中會是 window。  