
// 일반 함수 정의: 함수 선언문, 함수 표현식 
function foo(){};
const bar = function(){};

// 프로퍼티 값으로 할당된 것은 일반 함수로 정의된다.
const baz = {
    x : function(){}
};


// 일반 함수로 정의된 것은 constructor함수로 생성할 수 있다.

new foo();
new bar();
new baz.x();

const arrow = () =>{

};
//new arrow(); arrow is not a constructor
// 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x() {}
};
//new obj.x(); obj.x is not a constructor