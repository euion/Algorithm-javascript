function solution(arr) {
    var answer = [];
    var numArray = [];
    var temp =0 ;

    if (arr[1] != null) {
        temp = arr[0];
            for (let i = 0; i < arr.length; i++){
            if (temp >= arr[i]) {
                temp = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === temp) {
                arr.splice(i, 1);
            }
        }
        answer = arr;
    }else{
       answer[0] = -1;
    }   

    
    
    return answer;
}