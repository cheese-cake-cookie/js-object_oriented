var d1 = new Date("2019-04-10");

console.log(Date);

function Person(name, first, second, third)
{
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;

    this.sum = function () {
        return this.first + this.second + this.third
    }
}

var kim = new Person('kim', 10, 10, 10);
var lee = new Person('lee', 10 ,20 ,30);

console.log(Person()); // undefined
console.log(new Person()); // Person이라는 객체를 반환함
console.log(kim);
console.log(lee);