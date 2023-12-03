
function Person(name) {
    this.name = name;
};


Person.prototype.sayHello = function() {
    console.log(`hi! my name is ${this.name}`);
};
const me = new Person("ki");

// hasOwnProperty는 Object.prototype의 메서드이다.
console.log(me.hasOwnProperty("name"));

// 프로토타입의 프토로타입은 언제나 Object.prototype이다. 최상위 객체
// 자바스크립트는 객체의 프로퍼티에 접근 할 때 해당 프로퍼티가 없다면 상위 객체로 계속 올라간다.
// 이를 프로토타입 체인이라고 부른다.
// 모든 객체는 Object.prototype를 상속받는다, 이 때 최상위 객체에서도 없다면 undefined 반환
// 프로토타입 체인은 상속과 프로퍼티 검색을위한 메커니즘이다.