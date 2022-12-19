function solution(numbers) {
    var answer = [];
    for (var i = 0; i < numbers.length; i++){
        for (var j = i+1; j < numbers.length; j++){
            const result = numbers[i] + numbers[j];
            if (answer.indexOf(result) == -1) { // result가 answer내에 index가 없을 경우
                answer.push(result);    // answer에 result 값을 넣음(중복을 없애기 위함) 
            }
        }
    }
    
    return answer.sort((a,b)=>(a-b)); // 정렬
}