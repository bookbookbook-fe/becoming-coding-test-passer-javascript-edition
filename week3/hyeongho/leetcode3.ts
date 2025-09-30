/**
 * Overview
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

 

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

개요
n명의 아이들이 사탕을 가지고 있습니다. 정수 배열 candies가 주어지며, candies[i]는 i번째 아이가 가진 사탕의 개수를 나타냅니다. extraCandies는 여러분이 가지고 있는 추가 사탕의 개수입니다.

길이가 n인 불리언 배열 result를 반환하세요. result[i]는 i번째 아이에게 모든 추가 사탕을 주었을 때, 그 아이가 모든 아이들 중 가장 많은 사탕을 가지게 되면 true, 그렇지 않으면 false입니다.

여러 명의 아이가 가장 많은 사탕을 가질 수도 있다는 점에 유의하세요.

예시 1:

입력: candies = [2,3,5,1,3], extraCandies = 3
출력: [true,true,true,false,true]
설명: 모든 추가 사탕을 다음과 같이 주면:
- 아이 1: 2 + 3 = 5개로, 아이들 중 가장 많음
- 아이 2: 3 + 3 = 6개로, 아이들 중 가장 많음
- 아이 3: 5 + 3 = 8개로, 아이들 중 가장 많음
- 아이 4: 1 + 3 = 4개로, 아이들 중 가장 많지 않음
- 아이 5: 3 + 3 = 6개로, 아이들 중 가장 많음

예시 2:

입력: candies = [4,2,1,1,2], extraCandies = 1
출력: [true,false,false,false,false]
설명: 추가 사탕이 1개뿐입니다. 아이 1은 항상 가장 많은 사탕을 가지게 됩니다. 다른 아이에게 추가 사탕을 줘도 마찬가지입니다.

예시 3:

입력: candies = [12,1,12], extraCandies = 10
출력: [true,false,true]
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
