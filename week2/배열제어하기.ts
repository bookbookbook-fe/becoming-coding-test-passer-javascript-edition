// 정 수 배 열 을 하 나 받 습 니 다 . 배 열 의 중 복 값 을 제 거 하 고 배 열 데 이 터 를 내 림 차 순 으 로 정 렬 해 서 반
// 환 하 는 s o l u t i o n ( ) 함 수 를 구 현 하 세 요 .
// 제 약 조 건
// • 배 열 길 이 는 2 이 상 1 , 0 0 0 이 하 입 니 다 .
// • 각 배 열 의 데 이 터 값 은 - 1 0 0 , 0 0 0 이 상 1 0 0 , 0 0 0 이 하 입 니 다 .
// 1 1 2 둘 째 마 당 코 딩 테 스 트 완 전 정 복
// 입 출 력 의 예
// 입 력
// [4, 2, 2, 1, 3, 4]
// (2, 1, 1, 3, 2, 5, 4]
// 출 력
// (4, 3,2,1)
// (5, 4, 3, 2, 1)

const solution = (array: number[]) => {
  const uniqueArray = [...new Set(array)];
  return uniqueArray.sort((a: number, b: number) => b - a);
};

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
