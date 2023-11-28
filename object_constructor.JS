const person = new Object();    //빈 객체 생성

person.name = "kiwon";
person.sayHello = function(){
    console.log(`hello my name is ${this.name}`);
};
console.log(person);
person.sayHello();

const strObj = new String("hello");
console.log(strObj); //String ("hello")
console.log(typeof strObj); //object
const arr = new Array(1,2,3);
console.log(arr); // 1,2,3
console.log(typeof arr) //object