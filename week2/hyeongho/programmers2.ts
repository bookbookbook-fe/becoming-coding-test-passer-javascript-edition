// 정수 배열 하나를 받는다.
// 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 solution 함수를 구현하라.

// Set을 이용하여 중복 제거 후, sort를 이용하여 내림차순 정렬
function solution_1(array: number[]): number[] {
  return [...new Set(array)].sort((a, b) => b - a);
}
