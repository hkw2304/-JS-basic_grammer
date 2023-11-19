
// ES7에서 도이된 지수 연산자는 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱하여 숫사 값을 반환한다.

console.log(2 ** 2); //4
console.log(2 ** 2.5); //5.6568.....
console.log(2 ** 0); // 1

//지수 연산자가 도입되기 이전에느 Math.pow 메서드를 사용했다.

console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, 2.5)); //5.6568.....
console.log(Math.pow(2, -2)); //0.25

//음수를 거듭제곱의 밑으로 사용해 계산하려면 괄호로 묶어야한다.

//console.log(-5 ** 2);  에러 발생
console.log((-5) ** 2); // 25

//지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.
console.log(2 * 5 ** 2); // 50

