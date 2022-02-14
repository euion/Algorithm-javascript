let s = "AbcdVefg";
var answer = "";
answer = s.split("");

for (let i = 0; i < answer.length; i++) {
  if (answer[i] == answer[i].toUpperCase()) {
    answer.push();
  } else {
    answer.sort().reverse();
  }
}
console.log(answer);

console.log(answer.join(""));
