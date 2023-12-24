
// 자바스크립트에서 배열이 객체보다는 빠르다
/*
const arr = [];

console.time(`Array Performance Test`);

for(let i  = 0; i < 10000000; i++){
    arr[i] = i;
}

console.timeEnd(`Array Performance Test`);

console.time(`Object Performance Test`);
const obj = {};

for(let i = 0; i < 10000000; i++){
    obj[i] = i;
}
console.timeEnd(`Object Performance Test`);
*/
/*
let arr = [1,2,3];
console.log(arr);
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);
arr.length = 2;
console.log(arr);
arr.length = 5;
console.log(arr.length);
console.log(arr);
*/

/*
const arr = new Array(10);
//값이 존재하지않은 희소 배열, length만 존재하고 실제 값이 없다.
console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr));
*/

// Array.of : 전달된 인수를 요소로 갖는 배열을 생성

Array.of(1);
Array.of(`hello`);


let arr = [1,2];
console.log(arr);
arr[2] = 3;
console.log(arr);
arr[5] = 5;
console.log(arr);

delete arr[0];
// 사라진 사라는 희소배열이 된다.
console.log(arr.length);
// delete는 length길이에 변화를 주지 않는다.


// length를 자동 갱신 해준다.
let arr2 = [1,2,3];
arr2.splice(0, 1);
console.log(arr2);