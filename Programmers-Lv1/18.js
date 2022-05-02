function solution(nums) {
    var answer = 0;
    // 에라토네스의 체 소수 찾는 방법 활용
    //https://boycoding.tistory.com/225
    for(let i=0; i<nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            for (let k = j+1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                if (sumSqrt(sum)) answer += 1;
            }
        }        
    }
    
    return answer;
}
// Math.sqrt 메서드는 인수로 전달된 숫자의 제곱근을 반환한다.
function sumSqrt(num) {
    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return num >= 2;
}