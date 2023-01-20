let userNum;        //유저가 고른 주사위 숫자
let diceNum;        //랜덤으로 나온 주사위 숫자
// let은 바뀌어야하는 함수
// 화면에 표시
    const dispDom = (msgP, inNumP, bt1P, bt2P) => {
        document.getElementById("msg").style.display = msgP;
        document.getElementById("inNum").style.display = inNumP;
        document.getElementById("bt1").style.display = bt1P;
        document.getElementById("bt2").style.display = bt2P;
    }

    // 주사위 버튼 함수
    const showDice = () => {
        diceNum = Math.floor(Math.random()*6)+1;
        console.log(`주사위 랜덤수 => ${diceNum}`); //콘솔에 표시
        dispDom("none", "block","none", "block");
    }

    // 확인 버튼 함수
    const showOk = ()=>{
        const userNum = form1.num.value;
        dispDom("block", "none", "block","none",);
        // 랜덤으로 나온 주사위의 사진
        let tag = `<img src="./img/${diceNum}.png">`

        let ox;
        // 비교연산자 === data type까지 같은지 확인
        // ==은 데이터 타입 상관 없이 같은지 확인
            // parseInt(String) -> 숫자로 이루어진 문자열 n을 숫자형으로 변환
        if(diceNum==userNum) ox= 'o';
        else ox = 'x';            
        tag = `${tag}<img src="./img/${ox}.png">`;
        document.querySelector("#msg").innerHTML=tag;
        document.querySelector("form").reset(); // 앞서 선택한 것 초기화
        console.log(`유저가 선택한 숫자 => ${userNum}`);            

    }

    //DOM이 로드된 후 실행 초기 화면
    document.addEventListener("DOMContentLoaded", () => {
    // 주사위 버튼만 보이게
    dispDom("none", "none", "block","none",);
    })