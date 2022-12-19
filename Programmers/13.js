function solution(numbers, hand) {
    var answer = '';
    var right = [3, 6, 9];
    var left = [1, 4, 9];
    var status = [];
    var Rhand = "#";
    var LHand = "*";
    var numTwo = [[2], [1, 3, 5], [4, 8, 6], [7, 0, 9],["*","#"]];
    var numFive = [[5], [2, 4, 8, 6], [1, 7, 9, 3, 0]["*", "#"]];
    var numEight = [[8], [5, 7, 0, 9], ["*", "#", 6, 4, 2][1, 3]];
    var numZero = [[0], ["#", "*", 8], [7, 5, 9], [4, 2, 6], [1, 3]];
    // if (numbers[0] === right[0]) {
    //     answer[i]
    // }
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < right.length; j++){
            if (numbers[i] === right[j]) {
                status[i] = "R"
                Rhand = numbers[i];
            } else if (numbers[i] === left[j]) {
                status[i] = "L";
                LHand = numbers[i];
            } else {
                if (i === 0) {
                    if (hand === "right") {
                        status[i] = "R";
                        Rhand= numbers[i];
                    } else {
                        status[i] = "L";
                        LHand = numbers[i];
                    }
                } else {
                        // 2,5,6,8이 들어가야하는 numbers[i]의 i가 0이 아닐경우
                    if (numbers[i] === 2) {
                        for (let k = 0; k < numTwo.length; k++){

                        }    
                            
                    }
                }
            }   
        }
    }
    
    
    return answer;
}