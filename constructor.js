// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// new 연산자가 없으면 일반 함수로 동작한다.

function Circle(radius){
    this.radius = radius;
}


const circle = Circle(15);
console.log(circle); //반환 값이 없어서 암묵적으로 undefinded를 반환한다.

// 일반 함수에서 호출된 this는 전역객체를 가리킨다.
console.log(radius);


function Circle2(radius){
    // 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

    // this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;

    this.getDiameter = function() {
        return 2 * this.radius;
    };
    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
};

// 인스턴스 생성, Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle2 = new Circle2(1);
console.log(circle2);


// 생성자 함수는 암묵적으로 this를 반환한다.

// 보통 return으로 반환값을 넘겨주는데 원시 값을 넘겨주면 원시 값을 무시하고 암묵적으로 this가 반환된다.

function Circle3(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
    return 100;
}
const circle3 = new Circle3(10);
console.log(circle3);


// 생성자 내부에서 명시적으로 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손해서 생성자 함수에서는 return문을 생략하는것이 좋다.

