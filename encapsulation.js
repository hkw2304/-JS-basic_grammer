
// 캡슐화 : 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.
//          주로 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용한다.

/*
function Person(name, age){
    this.name = name;
    let _age = age;

    this.sayHi = function (){
        console.log(`Hi My name is ${this.name} . I am ${_age}`);
    };
}

const me = new Person("Lee", 20);
me.sayHi();
// 일반 함수의 this는 전역 객체를 가리킨다.
console.log(me.name = "hyun");
// let으로 지역변수이다 그래서 참조 불가능
console.log(me._age);
*/



/*
function Person(name, age){
    this.name = name;
    let _age = age;
}
Person.prototype.sayHi = function(){
    console.log(`Hi My name is ${this.name} . I am ${_age}.`);
}
const me = new Person("Lee", 20);
// _age is not defined : 지역 변수를 참조할 수 없어 에러 발생
me.sayHi();
*/

/*
const Person  = (function (){
    let _age = 0;
    // 생성자 함수
    function Person(name, age){
        this.name = name;
        _age = age;
    }
    Person.prototype.sayHi = function(){
        console.log(`Hi! my name is ${this.name}. I am ${_age}.`);
    };
    // 생성자 함수 반환
    return Person;
}());

const me = new Person("Lee", 20);
me.sayHi();
console.log(me.name);
console.log(me._age);
*/


var func = [];
for(var i = 0; i < 3; i++){
    func[i] = function(){return i;};
}
for(var j = 0; j < func.length; j++){
    console.log(func[j]());
}
console.log(func[1]());
