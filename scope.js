
function add(x, y){
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y) // 2 5
    return x + y;
};

add(2., 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x, y) //ReferenceError: x is not defined


var var1 = 1;

if(true){
    var var2 = 2;
    if(true){
        var var3 = 3;
    };
};

function foo(){
    var var4 = 4;
    function bar(){
        var var5 = 5;
    };
};

console.log(var1);
console.log(var2);
console.log(var3);
//함수 내부에서 선언된 변수는 함수내부에서만 참조가 가능하다.
// console.log(var4); //ReferenceError
// console.log(var5); // ReferenceError


var x = "global";

function foo2(){
    var x = "local";
    console.log(x);
};
foo2(); //local
console.log(x); //global

function foo3(){
    console.log("global function");
};
function bar2(){
    function foo3(){
        console.log("local function");
    };
    foo3();
}
bar2();

var num = 1;
function foo4(){
    var num = 10;
    bar4();
}
function bar4(){
    console.log(num);
};
foo4();
bar4();
