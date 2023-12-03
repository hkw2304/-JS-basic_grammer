
// 프로토타입은 생성자 함수 생성 시점에 더불어 생성된다.
// 즉 constructor함수 정의가 평가되는 시점

console.log(func.prototype);

function func(name){
    return this.name;
};

var add = function(num){
    return this.num = num;
}
console.log(add.prototype);

const func2 = (name) =>{
    this.name = name;
}
console.log(func2.prototype);


// 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype이고 Object를 상속을 받는다.

const obj = {x: 1};
console.log(obj.hasOwnProperty("constructor")); // false
// 객체는 constructor를 가지지 않지만 Object.property를 상속받는다.
console.log(obj.constructor === Object) // true

// constructor는 생성자함수를 가리킨다.
