# each-recursive

> replace foreach with recursion

## Install

```js
npm i -s each-recursive
```

## Import

```js
import eachRecursive from "each-recursive";
```

## Use

```js
eachRecursive(["thanks", "all"], (item, index) => console.log(item, index));
// thanks 0, all 1

eachRecursive({ a: 1, b: 2, c: 3 }, (key, value) => console.log(key, value));
// a 1, b 2, c 3
```
