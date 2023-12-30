

/*
 symgol : 변경 불가능한 원시 값, 다른 값과 절대 중복되지 않는 유일무이한 값
          다른 객체와는 다르게 new 연산자로 호출 하지 못한다.(변경 불가능한 원시 값이기 때문)


*/

const mySymbol = Symbol();
console.log(typeof mySymbol);

/*
const mySymbol1 = Symbol();
const mySymbol2 = Symbol();
console.log(mySymbol1 === mySymbol2); // false
*/


// Symbol.for : 심벌 값을 전역 심벌 레지스트리에 저장한다.
// 같은 프로퍼티가 있으면 생성하지 않고 반환을 한다.
const mySymbol1 = Symbol.for("hello");
const mySymbol2 = Symbol.for("hello");
console.log(mySymbol1 === mySymbol2); // true

// Symbol.keyFor : 전역 심벌 레지스트리에있는 값을 추출한다.

const s1 = Symbol.keyFor(mySymbol1);
console.log(s1);

/*
const Direction = {
    UP: 1,
    DOWN : 2,
    LEFT : 3,
    RIGHT : 4
};
const myDirection = Direction.UP;
if(myDirection === Direction.UP){
    console.log("hello!!");
}
*/

const Direction = {
    UP: Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT : Symbol('RIGHT')
};
const myDirection = Direction.UP;
if(myDirection === Direction.UP){
    console.log("hello!!");
}

const obj = {
    [Symbol.for('item1')] : 1,

};
console.log(obj[Symbol.for('item1')]);