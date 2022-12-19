function solution(numbers) {
    var answer = -1;
    const numArray =[1,2,3,4,5,6,7,8,9,0];
    var sum =0; //Const 변수는 재할당 안됨. 그러므로 재할당을 원할경우 var 사용
    for(let i=0; i<numbers.length; i++){

        for(let j = 0; j <9; j++){
            if( numbers[i] === numArray[j]){
               numArray.splice(j,1); //테스트 배열과 동일한 값이 numArray 배열에 저장됨.
               }
        }        
    }
    for(let k=0; k<numArray.length; k++){
        sum += numArray[k];
    }
    
    answer = sum;
    return answer;
}