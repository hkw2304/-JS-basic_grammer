


//객체란? 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 key, value로 이루어져있다.

var person = {
//   key    value
    name : "kiwon",     //하나의 프로퍼티
    age : "28",
};

var person2 = {
    name: "hyun",
    sayHello : function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

console.log(typeof person2);
console.log(person2);

var person3 = {
    name: "hyunki",
    "last-name": "won", //따옴표를 사용하지 않으면 -연산자가 있는 표현식으로 해석한다.
};console.log(person3)

var obj = {};
var key = "hello";
obj[key] = "world!!!";
console.log(obj); //{hello: world!!!}

var circle = {
    radius: 5,
    getDiameter: function(){
        return 2 * this.radius;  //this는 circle을 가리킨다
    },
}
//this는 객체 자신을 가리키는 참조변수다.
console.log(circle.getDiameter()); //10

var person4 = {
    "last-name": "won",
    1: 10,
};

console.log(person4["last-name"]) // won
//console.log(person4.last-name) //referenceError
console.log(person4["1"]) // 10

var person5 = {
    name: "kiwon",
};
person5.name = "won";
console.log(person5.name);

var person6 = {
    name: "kiwon",
};

person6.age = 20;
console.log(person6) //{name: "kiwon", age: 20};

var person7 = {
    name: "kiwon",
}
delete person7.age;
console.log(person7)
person7.age = 20;
console.log(person7)
delete person7.age;
console.log(person7)

let x = 7, y = 10;

var person8 = {
    x, y
};
console.log(person8);

const obj2 = {
    name: "kiwon",
    sayHello(){ //function 생략가능
        console.log(`hi ${this.name}`);
    }
};
obj2.sayHello();