function solution(n) {
    n = n.toString();

    var answer = 0;
    var numArray = [];
    numArray = n.split('').sort((a, b) => b - a);
    answer = numArray.join("");
    return parseInt(answer);
}