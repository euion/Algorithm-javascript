function solution(phone_number) {
    var answer = '';
    var numArray = [];

    numArray = phone_number.split('');

    for (let i = 0; i < phone_number.length - 4; i++){
        numArray[i] = "*";
    }

    answer = numArray.join("");
    return answer;
}