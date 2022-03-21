function solution(s) {
  var answer = "";
  answer = s.split("");

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == answer[i].toUpperCase()) {
      answer.push();
    } else {
      answer.sort().reverse();
    }
  }
  return answer.join("");
}
