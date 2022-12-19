function solution(s) {
  var answer = 0;
  let arr = []; // s담는 array
  let numArr = []; // 숫자 담는 array
  let alphaArr = []; // 알파벳 담는 array
  let totalArr = []; // 총합
  let totalIndexNum = 0;
  let alphaCnt = 0; // 알파벳 인덱스 번호 조절

  arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) == false) {
      let numCnt = 0; // result 인덱스 번호 조절
      numArr[numCnt] = Number(arr[i]);
      numCnt++;
      totalArr[totalIndexNum] = Number(arr[i]);
      totalIndexNum++;
    } else if (isNaN(arr[i]) == true) {
      let alphaJoin = "";
      alphaArr[alphaCnt] = arr[i];
      alphaCnt++;

      alphaJoin = alphaArr.join("");

      if (alphaCnt == 3) {
        if (alphaJoin == "one") {
          totalArr[totalIndexNum] = 1;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "two") {
          totalArr[totalIndexNum] = 2;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "six") {
          totalArr[totalIndexNum] = 6;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        }
      } else if (alphaCnt == 4) {
        if (alphaJoin == "zero") {
          totalArr[totalIndexNum] = 0;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "four") {
          totalArr[totalIndexNum] = 4;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "five") {
          totalArr[totalIndexNum] = 5;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "nine") {
          totalArr[totalIndexNum] = 9;
          totalIndexNum++;
          alphaCnt = 0;
          alphaArr = [];
          alphaJoin = "";
        }
      } else if (alphaCnt == 5) {
        if (alphaJoin == "three") {
          totalArr[totalIndexNum] = 3;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "seven") {
          totalArr[totalIndexNum] = 7;
          totalIndexNum++;
          alphaJoin = "";
          alphaArr = [];
          alphaCnt = 0;
        } else if (alphaJoin == "eight") {
          totalArr[totalIndexNum] = 8;
          totalIndexNum++;
          alphaCnt = 0;
          alphaJoin = "";
          alphaArr = [];
        }
      }
    }
  }

  answer = Number(totalArr.join(""));

  return answer;
}
