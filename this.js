function foo(){
    console.log(this); // node.js
}

//전역 객체는 브라우저환경에서는 window, node.js에서는 global을 가리킨다.

foo();

const obj = {foo};
obj.foo(); //obj

const inst = new foo(); //inst