
/*
자바,c++같은 클래스 기반 객체지향 프로그래밍이 언아가아닌
자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다

프로토타입 객체
어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
프로토타입을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 사용할 수 있다.

모든 객체는 하나의 프로토타입을 가진다.

객체 -> 프로토타입 <- 생성자함수
객체에서는 __proto__접근자 프로퍼티를 통해, 생성자 함수는 prototype프로퍼티를 통해 프로로타입(내부슬롯)에 접근한다.
즉 객체와 생성자함수가 가리키는 것은 동일하다.
중복 메서드를 프로토타입에 만들어 코드의 중복을 최소화 할 수 있다.

*/
function Circle(radius){
    this.radius = radius;
}
Circle.prototype.getArea = function(){
    return 3.14* this.radius * this.radius;
}
const area = new Circle(5);
const area2 = new Circle(3);

// 프로토타입을 상속받아 메서드는 사용
console.log(area.getArea());
console.log(area2.getArea());

console.log(Circle.hasOwnProperty("prototype")); // true
console.log(area.hasOwnProperty("prototype")); //false

// 서로 같은 것을 가리킨다.
console.log(area.__proto__ === Circle.prototype); //true


