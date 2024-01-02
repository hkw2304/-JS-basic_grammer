

/*
console.log(...[1,2,3]);

function foo(...rest){
    console.log(rest);
}
foo(...[1,2,3]);

const arr = [...[1,2], ...[3,4]];
console.log(arr);

function boo(...rest){
    console.log(rest);
}
boo(...[1,2,3,4]);


const obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
const arr2 = Array.from(obj);
console.log(arr2);

*/
const arr = [1,4];
const arr2 = [2,3];
/*
const newArr = arr.concat(arr2);
console.log(newArr);
const newArr2 = [...arr, ...arr2];
console.log(newArr2);
*/

arr.splice(1, 0, ...arr2);
console.log(arr); // [1,2,3,4]