



/*

전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않은 최상위 객체다.
var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.
전역 객체의 프로퍼티와 메서드는 전역 객체를 가리키는 식별자(window, global)를 생략하고 참조/호출할 수 있다.
*/

var foo = 1;
console.log(global.foo);

//빌트인 전역 프로퍼티

console.log(global.Infinity === Infinity); // true
console.log(typeof global.NaN); //number
console.log(NaN); //NaN
console.log(typeof undefined); //undefined
console.log(undefined); //undefined


//isFinite

console.log(isFinite(0)) //true
console.log(isFinite("abc")) //false
console.log(isFinite("10")) //true

//isNaN

console.log(isNaN(NaN))  //true
console.log(isNaN("10")) //flase
console.log(isNaN("ABC")) //true
console.log(isNaN(" ")) //공백은 0으로 판단, false

//parseFloat

console.log(parseFloat(3.14)); // 3.14
console.log(parseFloat(3.0))
console.log(parseFloat("3.14")); //3.14

//parseInt

console.log(parseInt("1")) //1
console.log(parseInt(3.14)); //3

// 두 번째 인자로 진법을 나타낼 수가 있다., 기본값 10진수
console.log(parseInt(10, 10)); // 10
console.log(parseInt(10, 16));

