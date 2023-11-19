var x = 10;

var str = x.toString();

console.log(typeof x, x); // number, 10
console.log(typeof str, str); //string, 10

var x2 = 10;
var str2 = "" + x2;
console.log(typeof str2, str2); // string, 10



//표현식을 평가할 때 코드의 문맥에 부합되지 않는 상황이 발생할 수 있는데 자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 한다.
console.log("10" + 2) // 102
console.log("10" * 2); // 20

// 문자열 타입으로 변환

console.log(typeof (1 + "")); //string
console.log(typeof (NaN + "")); //string
console.log(typeof (true + "")); //string

// 숫자형 타입으로 변환
console.log(1 - "3"); // -2
console.log(1 / "one"); //NaN 숫자가 아닌것들은 NaN으로 반환
console.log(1 - {}) //NaN 

//불리언형 타입으로 변환

function isFalsy(y){
    return console.log(!y);
}
function isTruthy(y){
    return console.log(!!y);
    // !! 논리값을 반환하기 위해 사용
}
isFalsy(0); //true
isFalsy(NaN); //true
isFalsy(""); //true

isTruthy(1); //true
isTruthy("hello"); //true
isTruthy([1,2]); //true

// String 
console.log(typeof String(1)); //string
console.log(typeof String(NaN)); //string
console.log(typeof String(true)); //string

//toString()
console.log(typeof (1).toString()); //string
console.log(typeof (true).toString()); //string
console.log(typeof (NaN).toString()); //string

//문자열 연결 연산자 +
console.log(typeof (4 + "")); //string
console.log(typeof (true + "")); //string
console.log(typeof (NaN + "")); //string


// Number
console.log(typeof Number("str"), Number("str")); //number, NaN
console.log(typeof Number(true), Number(true)); //number, 1
console.log(typeof Number(NaN), Number(NaN)); //number, NaN

// parseInt, parseFloat
console.log(typeof parseInt("1"), parseInt("1")); //number, 1
console.log(typeof parseInt("10.5"), parseInt("10.5")); //number, 10
console.log(typeof parseFloat("10.5"), parseFloat("10.5")); //number, 10.5
console.log(typeof parseInt("-2"), parseInt("-2")); //-2

//Boolean
console.log(typeof Boolean("str"), Boolean("str")); //true
console.log(typeof Boolean(NaN), Boolean(NaN)); //false
console.log(typeof Boolean(""), Boolean("")); //true

// !
console.log(typeof !!"str", !!"str"); //true
console.log(typeof !"str", !"str"); //true
