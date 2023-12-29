
console.log(new Date());
console.log(Date());
// Date 함수의 인수는 밀리초 단위이다.
console.log(new Date(3600));
console.log(new Date(2024,2));
console.log(new Date(`2024/03/16:10:11:99`))


const now = Date.now();
console.log(now);
console.log(new Date(now));

// 초 반환
console.log(Date.parse(`2024/01/01/01:01:01`));


const year = new Date();
console.log(year.getFullYear());
console.log(year.getMonth());
console.log(year.getDate());
console.log(year.getDay());
console.log(year.getHours());
console.log(year.getMinutes());
console.log(year.getSeconds());

//=========================

console.log(year.toDateString());
console.log(year.toTimeString());
console.log(year.toISOString());
console.log(year.toISOString().slice(0,10));
console.log(year.toLocaleString());