
/*
class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }
    add(arr){
        return arr.map(function (item){
            return this.prefix = item;
        });
    }
}

const prefixer = new Prefixer(`-webkit-`);
console.log(prefixer.add(['transition', 'user-select']));

*/
/*
const person = {
    name : "hyun",
    // this 가리키는 건 상위 객체(전역)이다.
    sayHi : () => {console.log(`Hi ${this.name}`)}
};
person.sayHi();
//Hi undefined
*/


/*
const person = {
    name : "hyun",
    sayHi() {
        console.log(`hi ${this.name}`);
    }
}
person.sayHi();
*/


// 클래스 필드 정의 제안을 사용하여 클래스 필드에 화살표 함수를 할당할 수도 있다.

class Person{
    name = 'hyun';
    sayHi = () => console.log(`Hi ${this.name}`);
}
const person = new Person();
person.sayHi();
// 생성자 함수의 this 클래스를 불러낸 객체를 가리킨다.