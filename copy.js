var person = {
    name: "kim",
};

//참조 값을 복사, person, copy는 동일한 객체를 가리키고 있다.
var copy = person;

console.log(copy === person);

person.name = "lee";

copy.addr = "Seoul";

//어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person);
console.log(copy);