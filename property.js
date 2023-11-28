
const person = {
    name: "kiwon"
};

//첫번째 인자에는 참조값, 두번째 인자에는 프로퍼티 키값
// 반환값으로 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, "name"));


const person2 = {
    //데이터 프로퍼티
    firstName: "hello",
    lastName: "world",
    //getter
    get fullName(){
        return this.firstName +""+ this.lastName;
    },
    //setter
    set fullName(name){
        this.firstName = name;
    }
};

// 데이터 프로퍼티로 접근
console.log(person2.firstName + " " + person2.lastName);

// 접근자 프로퍼티로 접근
// 자동적으로 setter함수 호출
person2.fullName = "wow javascript";
console.log(person2);
// 자동적으로 getter함수 호출
console.log(person2.fullName);

let des = Object.getOwnPropertyDescriptor(person2, "firstName");
// 데이터 프로퍼티 조회
console.log(des)

des = Object.getOwnPropertyDescriptor(person2, "fullName");
// 접근자 프로퍼티 조회
console.log(des);


