class Person{
    constructor(firstName, lastName){
        // 자동으로 변수가 추가된다.
        this.firstName = firstName;
        this.lastName = lastName;
    }
    showName = () =>{
        return this.firstName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        [this.firstName, this.lastName] = name.split(" ");
    }
}

const me =  new Person('hyun', 'giwon');

console.log(`${me.firstName} ${me.lastName}`);
me.fullName = "kim giwon";
console.log(me);

console.log(me.fullName);

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));


console.log(`메서드 호출 : ${me.showName()}`);