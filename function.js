
function add(x, y){
    /*
        함수이름: add
        x,y : 매개변수
        return : 반환값
    */
    return console.log(x + y);
};
//여기까지의 과정을 함수를 정의한 것


//함수 호출
//2, 5: 인수
add(2,5);  //7


//함수도 객체이다.

//함수를 표현하는 방식들

// 함수 선언문
// add2 : 엔진에서 암묵적으로 생성한 식별자
// var add2 = function add2()와 동일
//엔진에서는 암묵적으로 add2식별자를 생성해 함수이름으로 출력이 아닌 식별자로 출력을한다.
function add2(x, y){
    return x + y;
}
var add3 = function(x, y){
    return x + y;
}
var add4 = (x, y) =>{
    return x + y;
}