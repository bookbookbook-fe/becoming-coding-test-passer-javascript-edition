```js
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    return candies.map((item, index) => {
        const max = Math.max(...candies)
        return item + extraCandies >= max
    })
    
};
```
