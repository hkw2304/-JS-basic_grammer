// 동등비교(==) : 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 확인

console.log(5 == 5);  //true
console.log(5 == "5"); //true

//동등비교는 결과를 예측하기 어려우 결과를 만들기 때문에 사용하지 않는 편이 좋다.

// 일치비교(===) : 좌항과 우항의 타입도 같고 값고 같은 경우 true반환

console.log(5 === 5);  //true
console.log(5 === "5"); //false

// 일치비교 연산자에서 주의할 것은 NaN이랑 0이다.

console.log(NaN === NaN); // false
// 숫자가 NaN인지 확인할려면 Number.isNaN을 사용한다.
console.log(Number.isNaN(10)) //false
console.log(Number.isNaN(NaN)) //true

// 0은 +0,-0이 존재하는데 true를 반환한다

console.log(0 === -0); //true

// 정확한 비교를 원하면 Object.is함수 사용
console.log(Object.is(NaN,NaN)); // true
console.log(Object.is(0,-0)); //false

var a = 10;
var b = 20;

var result = a > b ? "a가 더 크다" : "b가 더 크다";
console.log(result)