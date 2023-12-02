// 자바스크립트는 객체를 상속하기 위해 프로토타입 방식을 사용한다
// 그래서 흔히 프로토타입기반 언어라고도 부른다. 


const obj = {

};
const parent = {
    x: 1
};

// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티여서
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

// obj객체의 프로토타입을 취득
obj.__proto__;

obj.__proto__ = parent;
console.log(obj.hasOwnProperty("__proto__"));
console.log(obj.x);

const person = {
    name: "kiwon"
};

console.log(person.hasOwnProperty("__proto__")); //false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// 모든 객체는 Object.prototype을 상속받아 __proto__접근자 프로퍼티를 사용한다.
console.log({}.__proto__ === Object.prototype); // true




