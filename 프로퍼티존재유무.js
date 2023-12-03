
// in 연산자

const person = {
    name: "kiwon",
    addr: "seoul",
    age: 20,
    __proto__: {pw: 132}
};

// 객체의 유무를 확인해준다.
console.log("name" in person); // true
console.log("addr" in person); //true
console.log("email" in person); //false

// Reflect.has

console.log(Reflect.has(person, "name")); //true

// Object.prototype.hasOwnProperty

console.log(person.hasOwnProperty("name")); // true

// 프로퍼티 열거
// 객체의 모든 프로퍼티를 순회하며 열거한다.
// for in : 프로퍼티 어트리뷰드의 Enumerable값이 true인 값들을 출력해준다.
for(let key in person){
    console.log(`${key} : ${person[key]}`);
};


// 자신의 프로퍼티인지만 확인

const items = {
    2:2,
    3:1,
    1:3,
    a: "a",
    b: "c"
};

for(let item in items){
    if(!items.hasOwnProperty(item)){
        continue;
    }
    console.log(`${item} : ${items[item]}`);
};



// 열거가능한 값들을 배열로 반환한다.
console.log(Object.keys(person));
