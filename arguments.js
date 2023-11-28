function multiply(x, y){
    console.log(arguments);
    return x + y;
};
console.log(multiply()); // undefined + undefined NaN
console.log(multiply(1)); // 1 + undefined NaN
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

