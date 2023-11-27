var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
var x = 100;

//초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1



var z = 1;

if(true){
    var z = 10;
};
console.log(z); // 10

function func(){
    var z = 1;
    console.log(z);
};
func();
console.log(z);

console.log(foo); // undefined

foo = 123;

console.log(foo); //123

var foo;

//let k = 10;
//let k = 100; //Identifier 'k' has already been declared

let zoo = 1; //전역
{
    let zoo = 10; //지역
    let boo = 100; //지역
};
console.log(1);
//console.log(boo); //ReferenceError: boo is not defined


let c = 100;
{
    console.log(c); // 100
}

//const c2; //Missing initializer in const declaration

const c3 = 1;
//c3 = 100; //Assignment to constant variable.

const person = {
    name: "kiwon"
};
console.log(person.name); //kiwon
person.name = "happy";
console.log(person.name); //happy

