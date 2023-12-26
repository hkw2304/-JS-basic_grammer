/*
const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();
console.log(fruits); // [Apple, Banana, Orange]
fruits.reverse();
console.log(fruits); // [Orange, Banana, Apple]


const todos = [
    {
        id: 4,
        content : "javascript"
    },
    {
        id: 1,
        content: 'html'
    },
    {
        id : 2,
        content: 'css'
    }
];
*/
//todos.sort()
//console.log(todos);

/*
const numbers = [1,2,3,4,5];
const pows = [];

numbers.forEach((item) => pows.push(item ** 2));
console.log(pows);
numbers.forEach((item, index, arr) => {
    console.log(`${item} 은 ${arr}의 ${index}번째 요소이다.`);
});
*/

/*
const numbers = [1,2,3,4,5];

const roots = numbers.map((item) => {
    return Math.sqrt(item);
});
console.log(roots);
*/

/*
const numbers = [1,2,3,4,5];

const odds = numbers.filter((item) => {
    return item % 2;
})
console.log(odds);
*/

/*
const numbers = [1,2,3,4,5];
let result = numbers.reduce((cnt, item) =>{
    return cnt += item;
})
console.log(result);
*/

// some : 하나라도 true면 true
// every : 모두가 true여야지 true
const numbers = [1,2,3,4];
/*

let ck = numbers.some((item) => {
    return item === 7;
})
console.log(ck);

*/
/*
let ck = numbers.every((item) =>{
    return item > 0;
});
console.log(ck);
*/

// find함수는 filter와 비슷한데 요소를 반환한다.
let item = numbers.find((item) => {
    return item === 2;
});
console.log(item);
