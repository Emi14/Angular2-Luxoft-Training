let x = 1;
console.log(x);

if (x === 1) {
    let y = 3;
}
//console.log(y); it's not working because y is not in scope

//creating function with => operator
let dot = 555;
f = (x, y) => {
    let dot = x * y;
    return dot;
}
console.log(f(7, 6));

//array matching
var list = [1, 2, 3];
var [a, , b] = list;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

//object matching
getASTNode = () => {
    return {op: 5, lhs: 6, rhs: 7};
}
console.log(getASTNode());
var {op, rhs, lhs} = getASTNode();
console.log(op, lhs, rhs);

//array destructing
let planets = ["Mercury", "Venus", "Terra", "Mars", "Snickers"];
let [aa, bb, c, d, e] = planets;
console.log(aa, bb, c, d, e);
let [first, ...others] = planets;
console.log(first, others);

//rest parameters
var wordsInTheNovel = (author, title, ...keywords) => {
    // for(let index in keywords){
    //     console.log("Keyword: "+keywords[index]);
    // }
    for (let keyword of keywords) {
        console.log("Keyword: " + keyword);
    }
}

wordsInTheNovel("Frank Herbert", "Dune", "planet", "universe", "people");

//using let vs var for async calls
crackTheSafeVar = () => {
    var users = ["Gigel", "Ionel", "Dorel"];
    for (var index = 0; index < users.length; index++) {
        var user = users[index];
        setTimeout(function () {
            console.log(user);
        }, 1000);
    }
}

crackTheSafeVar();

//templating
let from = "Dan", to = "all", greeting = "Hello";
console.log(`$(greeting) $(to)

This message will keep its newlines!
    And tabs! All!
    
    Regards,
            ${from}
`);

//maps
let account1 = {owner: "John", address: "Bucharest"};
let account2 = {owner: "Doe", address: "Bucharest"};
let bank = new Map();
bank.set(account1, 5000);
bank.set(account2, 6000);

for (let [account, amount] of bank) {
    console.log(account, amount);
}

//weakMap
let account3 = {owner: "John", address: "Bucharest"};
let account4 = {owner: "Doe", address: "Bucharest"};
let bank2 = new WeakMap();
bank2.set(account3, 5000);
bank2.set(account4, 6000);
console.log(bank2.get(account3));
account4 = null;
console.log(bank2.get(account4));

//classes
class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

let user = new User("John Doe", 24);
// let user = new User();
console.log(user.isAdult());

//inheritance
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        console.log(x, y);
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
}

let rectangle = new Rectangle(1, 2, 3, 4, 5);
console.log(rectangle.move(1, 2));