
const x = 1;


/*
function outerFunc(){
    const x = 10;
    function innerFunc(){
        console.log(x) //10
    }
    innerFunc();
}
outerFunc();
*/
// innerFunc함수는 outerFunc함수의 내부에 중첩이 되어 있기 때문에 x 변수에 접근이 가능하다.

/*
function outerFunc(){
    const x = 10;
    innerFunc();
}
function innerFunc(){
    console.log(x); //1
}
outerFunc();
*/
// outerFunc의 변수에 접근 불가능
/*
function foo(){
    const x = 10;

    // 상위 스코프는 호출 위치가 아닌 어디에서 정의를 했는지에 따라 결정\

    bar();
}
function bar(){
    // 함수 bar는 자신의 상위 스코프 전역 렉시컬 환경을 [[environment]]에 저장하여 기억.
    console.log(x);
}
foo() //1
bar() //1
*/

function outer(){
    const x = 10;
    const inner = function(){
        console.log(x);
    }
    return inner;
}

// 외부 함수보다 중첩 함수 더 오래 유자되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수 참조 가능
// 이것이 클로저라한다.
const innerFunc = outer();
innerFunc();


/*
클로저가 가능한 이유는 자바스크립트의 모든 함수는 자신의 상위 스코프를 기억한다
중첩 함수는 평가가 될 때 상위 스코프를 [[environment]] 내부 슬롯에 저장
외부함수의 생명 주기가 끝 날때 실행 컨텍스트에서 제거되지만 이 때 중첩 함수가 있다면 렉시컬 환경까지는 제거가 되지 않는다.
모든 것이 클로저는 아니고 상위 스코프의 식별자를 참조 하지 않으면 자동적으로 상위 스코프를 기억하지 않는다.

--- 클로저 ---
1.자바스크립트의 모든 함수는 자신의 상위 스코프를 [[environment]]환경에 저장
2.외부 함수의 생명 주기가 끝나면 실행 컨텍스트에서 제거되지만 렉시컬 환경을 내부 함수에 저장
3.외부 함수의 식별자를 참조 하지않으면 자동적으로 가비지컬랙터의 제거 대상이 되서 클로저는 아니다.
3.중첩 함수가 외부 함수보다 더 오래 지속되어야 한다.

*/





