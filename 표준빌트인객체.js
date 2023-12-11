

// 자바스크립트는 Object, String, Number, Boolean, Symbol, Math.....
// 등 40여개의 표준 빌트인 객체를 제공한다.
/*
    -표준빌트인-
    ECMAScript에서 제공하는 객체이고, 실행환경에 상관없이 전역 객체의 프로퍼티로 제공돼서
    어디서든 참조할 수 있다.
*/


const strObj = new String("hello");
console.log(typeof strObj);
const arr = new Array(1,2,3);
console.log(typeof arr);


// ===========================================

/*
    원시값으로 값을 할당하면
    암묵적으로 생성된 래퍼 객체(String, Number)를 가리킨다.

*/