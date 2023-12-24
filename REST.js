
/*
function foo(...rest){
    console.log(rest);
}
foo(1,2,3,4,5);
*/

// 일반 매개변수와 rest파라미터를 같이 받을 수 있다.
/*
function foo(param, ...rest){
    console.log(param);
    console.log(rest);
}
foo(1,2,3,4,5);
*/

// Rest 파라미터는 반드시 마지막에 위치하여야 한다.
/*
function foo(...rest, param1, param2){
    //Rest parameter must be last formal parameter
    console.log(rest);
}
foo(1,2,3,4);
*/
// Rest 파리미터는 반드시 하나만 사용가능하다.
/*
function foo(...rest, ...rest2){
    //Rest parameter must be last formal parameter
    console.log(rest);
}
foo(1,2,3,4);
*/

// Rest 파라미터는 length파라미터에 영향을 주지 않는다.
/*
function foo(...rest){

}
console.log(foo.length); // 0

function foo2(x, ...rest){

}
console.log(foo2.length); // 1
*/

// ES5에서는 arguments 객체를 통해 가변 인수를 받았다.
// 유사 배열이므로 배열메서드를 사용하기 위해선 prototype 메서드를 통해서 변환 해줘야 했다.
/*
function foo(){
    //console.log(arguments);
    var array = Array.prototype.slice.call(arguments);
    console.log(array);
}
foo(1,2);
*/

function sum(...args){
    return args.reduce((pre, cur) => pre + cur, 0 
    );
}
console.log(sum(1,2,3,4,5));