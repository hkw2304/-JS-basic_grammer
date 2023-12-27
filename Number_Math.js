// 부동소수점때문에 fasle
//console.log(0.1 + 0.2 === 0.3); 


/*

    Number.isFinite : 인수가 유한수인지 판별
    Number.isInteger : 인수가 정수인지 판별
    Number.isNaN : 인수가 NaN인지 판별
    Number.prototype.toString() : 숫자를 문자로 변환

*/

console.log(Number.isFinite(1)); //true
console.log(Number.isInteger(2)); // true
//console.log(Number.isNaN("abc"));
console.log(typeof (1).toString()); //string

/*
    Math.PI : 원주율 반환
    Math.abs :절댓값 반환
*/


console.log(Math.PI); //원주율
console.log(Math.abs(-2)); // 절댓값
console.log(Math.round(1.8)); // 반올림
console.log(Math.ceil(1.4)); // 올림
console.log(Math.floor(1.9)); // 내림
console.log(Math.sqrt(9)) //제곱근 반환

const result = Math.floor(Math.random() * 10 + 1);
console.log(result);

console.log(Math.pow(2, 3)); //제곱수 반환
console.log(Math.max(1,2,3)); //최댓값 반환 (min도 있다.)