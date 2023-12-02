

// 함수 객체의 prototype 프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

let item = (function () {}).hasOwnProperty("prototype");
console.log(item); // true

item = ({}).hasOwnProperty("prototype");
console.log(item); //false

// prototype 프로퍼티는 생성자 함수가 생성할 객체의 프로토타입을 가리킨다.
// 즉 non-constructor 함수는 prototype 프로퍼티를 생성하지 않는다.

const Person = (name) =>{
    this.name = name;
};

console.log(Person.hasOwnProperty("prototype")); //false
console.log(Person.prototype); //undefined

const obj = {
    foo(){}
};
console.log(obj.foo.hasOwnProperty("prototype")) // false;
console.log(obj.foo.prototype); // udnefined

// 생성자 함수의 prototype 프로퍼티와 모든 객체가 가지고 있는 __proto__는 동일한 프로토타입을 가리킨다. 

function person2(name){
    this.name = name;
};

const me = new person2("kiwon");

console.log(person2.prototype === me.__proto__); //true


