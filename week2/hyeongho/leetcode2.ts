/**
 * 
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

두 문자열 s와 t에 대해, "t가 s를 나눈다"는 것은 s = t + t + t + ... + t + t (즉, t를 한 번 이상 연결한 것)인 경우를 의미합니다.
두 문자열 str1과 str2가 주어졌을 때, str1과 str2를 모두 나누는 가장 긴 문자열 x를 반환하세요.
예제 1:

입력: str1 = "ABCABC", str2 = "ABC"
출력: "ABC"

예제 2:

입력: str1 = "ABABAB", str2 = "ABAB"
출력: "AB"

예제 3:

입력: str1 = "LEET", str2 = "CODE"
출력: ""

제약 조건:

1 <= str1.length, str2.length <= 1000
str1과 str2는 영어 대문자로만 구성됩니다.
 */

/** @summary 최대 공약수를 사용하는 이유
 * 만약 어떤 문자열 x가 두 문자열 str1, str2를 모두 나눈다면
str1 = x + x + ... + x  (k번 반복)
str2 = x + x + ... + x  (m번 반복)

str1.length = k × x.length
str2.length = m × x.length

즉, x.length는 str1.length와 str2.length의 공약수
 */
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function gcdOfStrings_1(str1: string, str2: string): string {
  // 두 문자열이 공통된 패턴을 가지지 않을때
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  // 패턴 길이 계산(두 길이의 GCD)
  const gcdLength = gcd(str1.length, str2.length);
  // 해당 길이만큼 문자열 반환
  return str1.substring(0, gcdLength);
}
