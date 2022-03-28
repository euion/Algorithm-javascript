function solution(n) {
    var answer = 0;
    var num = 0;
    var num1 = 0;
    
    num = n.toString(3).split("").reverse();
    num1 = num.join("");
    
    
    answer = parseInt(num1,3);
    
    return answer;
    
}