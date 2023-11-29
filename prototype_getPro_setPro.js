
// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.

const obj = Object.create(null);

console.log(obj.__proto__); //undefined

// 따라서 Object.getPrototypeOf 메서드를 사용한다.

console.log(Object.getPrototypeOf(obj));  //null

// 프로토타입의 참조를 취득하고 싶은 경우 Object.getPrototypeof 메서드
// 프로토타입의 교체를 원하면 Object.setPrototypeOf 메서드를 사용한다.
