function solution(s) {
    var answer = true;
    
    if((s.length == 4 || s.length == 6) && s==parseInt(s))
        return true;
    else
        return false;
        
}