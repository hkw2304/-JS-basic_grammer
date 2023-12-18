// js는 기본적으로 public이지만  상위 버전인 타입스크립트에서 #을 붙혀 private가 가능.
class Person{
    // private는 반드시 클래스 몸체에서 정의
    #name = '';
    constructor(name){
        this.#name = name;
    }
    get name(){
        return this.#name.trim();
    }
}

const me = new Person('Hyun');
// console.log(me.#name); 외부에서 접근 불가
console.log(me.name);