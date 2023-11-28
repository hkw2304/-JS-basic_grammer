function multiply(x, y){
    console.log(arguments);
    return x + y;
};
console.log(multiply()); // undefined + undefined NaN
console.log(multiply(1)); // 1 + undefined NaN
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

// arguments 객체는 가변 인자 함수를 구현할 때 유용하다.

function sum(){
    let res = 0;

    for(let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
};

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));



//name 프로퍼티 : 함수 이름을 나타낸다.


var namedFunc = function foo(){
}
console.log(namedFunc.name); //foo

var anonymouseFunc = function(){
}
console.log(anonymouseFunc.name); //anonymouseFunc
function bar(){}
console.log(bar.name);