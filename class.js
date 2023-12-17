
/*
// 클래스 선언문
class Person{}

// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass{};


*/

// 클래스 몸체에서 정의할 수 있는 메서드는 생성자, 프로토타입 메서드, 정적 메서드 세 가지가 있다.

/*
class Person {
    // 생성자
    constructor(name){
        this.name = name;
    }
    // 프로토 타입 메서드
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
    // 정적 메서드
    static sayHello(){
        console.log("hello!!!");
    }
    
}

const me = new Person("hyun");

console.log(me.name);
me.sayHi();
Person.sayHello();
*/

/*
클래스도 함수이다
그래서 함수 선언문과 같이 소스코드 평가 과정, 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성한다.
*/

// 함수는 new 연산자로 호출해서 생성자 함수로 호출되냐 아니면 일반 함수로 호출이 되냐로 나누어지지만
// 클래스는 무조건 new 연산자와 함께 호출해줘야한다.
// 자바와 다르게 JS에서는 생성자 오버로딩이 안된다. 즉 생성자는 하나만 존재 가능
// 생성자 함수는 반환문 없고 new 연산자로 호출 시 this, 클래스에서는 인스턴스를 자동적으로 반환
// 생성자 함수는 인스턴스값 초기화를 위해 사용

/*
class Person {
};
//const me = new Person(); Person
// const me = Person(); //error

const Person = class myClass{}

const me = new Person();
console.log(myClass);
*/

class Person{
    constructor(name){
        this.name = name;
        // 생성자에서는 return을 선언하지 않는다 자동적으로 this값 반환
        /*
        return {
        };
        */
    //    원시값 반환시 무시하고 this값 반환
       return 100;
    }
}
const me = new Person("hyun");
console.log(me);

console.log(Math.max(1,2,3));
