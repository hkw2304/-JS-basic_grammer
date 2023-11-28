
//프로퍼티 정의
// 새로운  프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 재정의한다.

const person = {};

Object.defineProperty(person, "firstName", {
    value: "kiwon",
    writable: true,
    enumerable: true,
    configurable: true
});

let des = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(des);


// 프로퍼티의 재정의 할 때 다른 값을은 명시하지 않으면 false이다.
Object.defineProperty(person, "lastName", {
    value: "hello",
    writable: true,
    enumerable: true,
    configurable: true
});

des = Object.getOwnPropertyDescriptor(person, "lastName");
console.log(des);

// lastName은 열거 되지 않는다.
console.log(Object.keys(person));

// 오류는 발생하지 않지만 무시가 된다.
person.lastName = "world";

// 프로퍼티도 삭제할 수가 없다.
delete person.lastName;

console.log(person);

/*
configurable값이 false 여서 프로퍼티의 재정의가 안된다.
Object.defineProperty(person, "lastName", {
    enumerable: true //Cannot redefine property: lastName
});
*/

Object.defineProperty(person, "fullName", {
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    set(name){
        [this.firstName, this.lastName]=name.split(" ");
    },
    enumerable: true,
    configurable: true
});
des = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(des);
person.fullName = "hyun kiwon";
console.log(person.fullName);

Object.defineProperties(person, {
    firstName:{
        value: "hello",
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: "world",
        enumerable: true,
        configurable: true,
        writable: true
    },
});
// des = Object.getOwnPropertyDescriptor(person, "");
console.log(person);