
//객체 변경 방지

//객체 확장 금지
// 읽기,쓰기, 삭제만 가능
const person = {
    name: "kiwon",
};
// isExtensible : 객체의 확장 여부를 판단
console.log(Object.isExtensible(person)); //true

// 확장금지
Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age = 20;
console.log(person); //오류는 안나지만 확장이 안된다. 단 삭제는 된다.

delete person.name;
console.log(person);

//Cannot define property name, object is not extensible
// 재정의도 안된다.
// Object.defineProperty(person, "name",{
//     value: "20"
// }),
console.log(person);

// 객체 밀봉
// 읽기, 쓰기만 가능

const person2 = {
    name: "kiwon"
};
// isSealed : 밀봉 여부

console.log(Object.isSealed(person2));

Object.seal(person2);
console.log(Object.isSealed(person2));

console.log(Object.getOwnPropertyDescriptors(person2));

person2.age = 20;
delete person2.name;
person2.name = "hello";
console.log(person2);

// 객체 동결
// 읽기만 가능

const person3 = {
    name: "kiown"
};
Object.freeze(person3);
console.log(Object.isFrozen(person3));
console.log(Object.getOwnPropertyDescriptor(person3, "name"))
console.log(Object.keys(person3))
person3.age = 20;
delete person3.name;
console.log(person3);
Object.defineProperty(person3, "name", {
    configurable: true
});
console.log(Object.getOwnPropertyDescriptor(person3, "name"));




