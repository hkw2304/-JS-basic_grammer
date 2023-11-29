// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.


function Circle(radius) {
    this.radius = radius;
}

// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
// 함수의 this는 전역을 뜻한다.
// Math.PI : 원주율을 나타내는 상수
Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); //true

console.log(circle1.getArea());
console.log(circle2.getArea());
