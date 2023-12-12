

// 전역에서의 this는 window를 가리킨다.
console.log(this);

// 일반함수의 this는 window를 가리킨다.
function square(number){
    console.log(this);
};
square(5);

// 객체에서의 this는 호출한 객체를 가리킨다.
const person = {
    age: 10,
    showAge(){
        console.log(this); //person 프로퍼티
        return this.age;
    }
}
console.log(person.showAge()); //10


// 생성자 함수의 this는 호출한 인스턴스를 가리킨다.
const Circle = function(name){
    this.name = name;
    console.log(this);
}

const show = new Circle(10);

