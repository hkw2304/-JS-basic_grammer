
/*
const map = new Map();
console.log(map);

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1);
// set과 마찬가지로 중복을 허용하지 않는다,그리고 값을 덮어쓴다.
const map2 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map2);

const{size} = new Map([['key1', 'valur1'],['key2', 'valur2']]);
console.log(size);

// map.set : 요소 추가

map.set('key1', 'value1');
console.log(map);
map.set('key1', 'value1').set('key2', 'value2');
console.log(map);

// map은 객체도 키로 가져올 수 있다.

const map3 = new Map();
const lee = {name: 'Lee'};
const kim = {name: 'kim'};
map3.set(lee, 'developer').set(kim, 'desinger');
console.log(map3);


console.log(map3.has(lee));
map3.delete(kim);
console.log(map3);
map3.set('hyun', 'programmer');
console.log(map3);
map3.clear();
console.log(map3);
*/

const map4 = new Map([['key1', 'value1'], ['key2', 'value2'],['key3', 'value3']]);
map4.forEach((item, index, total) => {
    return console.log(item, index, total);
});
// 이터러블 객체
for(const entry of map4){
    console.log(entry);
}
// 스프레드 문법가능
console.log([...map4]);
// 디스트럭처링 할당
const [a,b,c] = map4;
console.log(a,b,c);
console.log(map4.keys());
for(const item of map4.keys()){
    console.log(item);
}
for(const item of map4.values()){
    console.log(item);
}
for(const item of map4.entries()){
    console.log(item);
}