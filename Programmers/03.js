// <풀이방법>
// strings 배열을 나누어 처리하는 것보다 정렬(Sort)기능에서 바로 처리하는 것이 낫다고 판단

function solution(strings, n) {
  var answer = strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      // 정렬 요소의 n번째 글자가 같으면
      return (a > b) - (a < b); // 매개변수로 받은 문자열 전체를 비교
    } else {
      // n번째 글자가 같지 않을 경우
      return (a[n] > b[n]) - (a[n] < b[n]); // 글자를 비교하여 정렬
    }
  });
  return answer;
}
