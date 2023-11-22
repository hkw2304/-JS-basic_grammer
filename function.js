
function add(x, y){
    /*
        함수이름: add
        x,y : 매개변수
        return : 반환값
    */
    return console.log(x + y);
};
//여기까지의 과정을 함수를 정의한 것


//함수 호출
//2, 5: 인수
add(2,5);  //7


//함수도 객체이다.

//함수를 표현하는 방식들

// 함수 선언문
// add2 : 엔진에서 암묵적으로 생성한 식별자
// var add2 = function add2()와 동일
//엔진에서는 암묵적으로 add2식별자를 생성해 함수이름으로 출력이 아닌 식별자로 출력을한다.

//함수 선언식
function add2(x, y){
    return x + y;
}
//함수 표현식
var add3 = function(x, y){
    return x + y;
}
//화살표 함수(ES6)
var add4 = (x, y) =>{
    return x + y;
}

// 함수 생성 시점과 함수 호이스팅

console.log(helloPrn); //hello
console.log(helloPrn2); //undefined

function helloPrn(){
    console.log("hello!!!");
}
var helloPrn2 = function(){
    console.log("hello!!!")
}

console.log(helloPrn2); //hello

//매개변수

function add(a, b){
    return a + b;
};
console.log(add(2)); //NaN

function add2(a, b){
    return a + b;
};

console.log(add2(1,2,3)); //3

function newAdd(a = 0, b = 0, c = 0){
    return a + b + c;
}
console.log(newAdd(1)); //1

function func(){
    return;
}
console.log(func()); //undefined



// 참조에 의한 전달과 외부 상태의 변경

function changeVal(item, obj){
    item += 100;
    obj.name = "hyun";
    console.log(item);
};

var num = 100;
var obj = {
    name: "kim"
};

changeVal(num, obj);
// 원시값은 재할당되서 넘겨줘서 값이 변하지 않는다.
console.log(num);
//참조값을 넘겨줘서 값이 변경된다.
console.log(obj);