

// function 키워드 대신 화살표를 사용하여 기존의 함수 정의 방식보다 간략하게 정의하고 콜백 함수에서 사용이 유리하다.

const power = x => x ** 2;
console.log(power(2)); // 4

// 객체로 반환하는 경우는 반환값을 리터럴로 감싸 주어야 한다.
const create = (id, content) =>({id, content});
console.log(create(1, 'giwon'));

//sum

const sum = (a, b) =>{
    return a + b;
}
console.log(sum(1,2));

// 즉시 실행 함수

const person = (name =>({
    sayHi(){
        return `Hi My name is ${name}.`;
    }
}))('Lee');

console.log(person.sayHi());

