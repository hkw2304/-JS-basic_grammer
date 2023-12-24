

// indexof : 인수로 전달된 요소를 검색하여 인덱스 반환, ES7에서 includes함수 추가

const arr = [1,2,3,4,5];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(10)); //없으면 -1 반환

// true, false 반환
console.log(arr.includes(1)); //true
console.log(arr.includes(6)); //false