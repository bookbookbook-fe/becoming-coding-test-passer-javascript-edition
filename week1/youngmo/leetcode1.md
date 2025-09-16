## 1768. Merge Strings Alternately

```js
function mergeAlternately(word1: string, word2: string): string {
    let result = []
    const array1 = word1.split("").reverse();
    const array2 = word2.split("").reverse();

    while (array1.length > 0 || array2.length > 0) {
  if (array1.length > 0) {
    result.push(array1.pop())
  }
  if (array2.length > 0) {
    result.push(array2.pop())
  }
}
return result.join("");

};
```

