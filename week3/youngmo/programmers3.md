```js
function solution(a){
  const result = []
  for(let i = 0; a.length > i; i++){
    for(let j = 0; i > j; j++){
      const value1 = a[i];
      const value2 = a[j];
        result.push(value1 + value2)
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);  
}
```
