var score = 100;
var copy = score;

console.log(score, copy);
console.log(score === copy);

score = 80;


console.log(score, copy);
console.log(score === copy);


let person = {
    name: "kiwon",
    "age" : "20",
    "first-name": "hyun",
    last_name: "won",
    hello: function(){
        console.log("heelo");
    }
};

console.log(person);
person.addr = "seoul";
console.log(person);

