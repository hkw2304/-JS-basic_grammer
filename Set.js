
/**
 *  set 객체는 중복되지 않는 유일한 값들의 집합
 *  중복 불가능, 요소 순서에 의미가 없다, 인데스로 접근 불가
 *  이터러블을 인수로 받는다.
 * 
 * 
 * 
 */

const set = new Set();
console.log(set);
const set2 = new Set([1,2,3,4]);
console.log(set2);
const {size} = new Set([1,2,3,4]);
console.log(size);

// add set 요소 추가

const set3 = new Set();
console.log(set3);
set3.add(1);
console.log(set3);
set3.add(2).add(3).add(3);
// 중복값 불가
console.log(set3);


// has : 요소 존재 여부 확인

console.log(set3.has(1));

//  delete : 요소 삭제
//  clear : 일괄 삭제
set3.delete(2);
console.log(set3);
// set3.delete(8); 없는 값을 제거한다고 에러는 안난다.
console.log(set3);
set3.clear();
console.log(set3);


const set4 = new Set([1,2,3,4,5]);
console.log(set4);
set4.forEach((item) =>{
    return console.log(item);
});
for(const item of set4){
    console.log(item);
}
console.log(...set4);
const [x, ...rest] = set4;
console.log(x, rest);

/*
Set.prototype.intersection = function (set){
    const result = new Set();

    for(const value of set){
        if(this.has(value)){
            result.add(value);
        }
    }
    return result;
}
*/
/*
Set.prototype.intersection = function (set){
    return new Set([...this].filter(item => set.has(item)));
}
*/
/*
Set.prototype.union = function (set){
    const result = new Set(this);

    for(const value of set){
        result.add(value);
    }
    return result;
}
Set.prototype.union = function(set){
    return new Set([...this, ...set]);
}
*/
// Set.prototype.difference = function(set){
//     const result = new Set(this);
//     for(const value of set){
//         result.delete(value);
//     }
//     return result;
// }
/*
Set.prototype.difference = function(set) {
    return new Set([...this].filter(item => !set.has(item)));
}
*/
/*
Set.prototype.isSuperSet = function(set){
    for(const item of set){
        if(!this.has(item)){
            return false;
        }
    }
    return true;
}
*/
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

// console.log(setA.intersection(setB));
// console.log(setA.union(setB));
// console.log(setA.difference(setB));
console.log(setB.isSuperSet(setA));