// 디스트럭처링 할당은 구조화된 배열이나 객체를 파괴하여 변수에 개별적으로 할당한다.
const arr = [1,2,3];
const [a, b, c, d] = arr;
console.log(a,b,c, d);

const [e,f] = [1,2];
console.log(e,f);

const obj = {
    firstname: 'hyun',
    lastname: 'giwon'
};
// 객체의 순서에 상관 없이 할당된다.
// 우변에는 값이 있어야 한다.
// const {lastname, firstname} = null;
const {lastname, firstname} = obj;
console.log(lastname);

// 디스트럭처링 할당은 객체에서 필요한 프로퍼티 값만 추출할 수 있다.

const str = 'hello';
const {length} = str;
console.log(length);
/*
const todo = {id: 1, content: 'html'};
console.log(todo);
const{id} = todo;
console.log(id);
*/

const todo2 = [
    {id: 1}, {id: 2}
];
console.log(todo2);
const [, {id}] = todo2
console.log(id);

const user = {
    name: 'giwon',
    address: {
        city: 'gimpo'
    }
};
const {address: {city}} = user;
console.log(city);

const {x, ...rest} = {x: 1, y: 2, z: 3};
console.log(x, rest);


