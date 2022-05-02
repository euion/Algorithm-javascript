function solution(answers) {
    var answer = [];
    let firstStu = [1,2,3,4,5];
    let secondStu = [2,1,2,3,2,4,2,5];
    let thirdStu = [3,3,1,1,2,2,4,4,5,5];
    let count = [0,0,0];
    
    for (let i=0; i<answers.length; i++){
        //정답과 비교, 학생과 비교
        if(firstStu[i%firstStu.length]===answers[i]){
            count[0]++;
        }
        if(secondStu[i%secondStu.length]===answers[i]){
            count[1]++;
        }
        if(thirdStu[i%thirdStu.length]===answers[i]){
            count[2]++;
        }
    }

    const maxScore = Math.max(...count);

    for (let j = 0; j < count.length; j++){
        if (count[j] === maxScore) {
           answer.push(j + 1);
        }
    }
    
    return answer;
    
}