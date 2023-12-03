function Person(name) {
    this.name = name;
};

const me = new Person("kim");

console.log(me instanceof Person); //true
console.log(me instanceof Object) //true