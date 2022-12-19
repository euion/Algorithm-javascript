function solution(seoul) {
    var answer = '';
    
    for(var i in seoul){
        if(seoul[i]==="Kim"){
            answer = i;
        }
    }
        
    return "김서방은 "+ answer + "에 있다";
}