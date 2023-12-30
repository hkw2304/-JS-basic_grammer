const str = '  H:el:lo wor:ld!!  ';
console.log(str.indexOf('x'));
console.log(str.includes('x'));
console.log(str.startsWith('w', 6));
console.log(str.charAt(1));
console.log(str.substring(0,4));
console.log(str.substring(4));
console.log(str.substring(0));
// slice랑 substring은 거의 똑같다,
// 다만 substring은 음수를 반환하지 못하지만 slice는 뒤에서 가져온다.
console.log(str.slice(0,5));
console.log(str.slice(-2));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

console.log(str.replace('world', 'hyun'));

console.log(str.split(':'));

