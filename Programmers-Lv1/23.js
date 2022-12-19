function solution(s) {
  var answer = 0;
  let result = "";
  let count1 = 0;
  let count2 = 0;

  for (let c of s) {
    if (!result) result = c;

    if (result == c) count1++;
    else count2++;

    if (count1 === count2) {
      answer++;
      count1 = 0;
      count2 = 0;
      result = "";
    }
  }

  if (result) answer++;

  return answer;
}
