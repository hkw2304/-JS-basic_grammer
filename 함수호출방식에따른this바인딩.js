

// 일반 함수 호출
// this에는 기본적으로 전역 객체가 바인딩된다.

function foo(){
    console.log(this); 
    function bar(){
        console.log(this);
    }
    bar();
}
// 중첩 함수라도 일반 함수로 호출 시 전역 객체가 바인딩된다.
foo();

var value = 1;

const obj = {
    value: 100,
    foo2: function(){
        console.log(this);
        console.log(this.value);
        function foo3(){
            console.log(this);
            console.log(this.value);
        }
        foo3();
    }
};
obj.foo2();

// 일반 함수로 호출된 모든 함수(중첩, 콜백) 내부의 this에는 전역 객체가 바인딩된다.

