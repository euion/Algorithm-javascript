var arr = [5, 6, 7, 10];
var divisor = 5;

function solution(arr, divisor) {
  var answer = [];

  arr.map((v) => {
    if (v % divisor === 0) {
      answer.push(v);
    }
  });
  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer = [-1];
  }
  return answer;
}
