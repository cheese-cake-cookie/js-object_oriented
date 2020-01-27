function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    // this.name = name;
    // this.first = first;
    // this.second = second;

    // 위 세 코드를 한줄로 대체 가능하다

    // PersonPlus 내부에서 Person이 생성자 함수로 실행될 때는 
    // this를 PersonPlus로 갖게 함
    Person.call(this, name, first, second);

    this.third = third;
}
// PersonPlus.prototype.__proto__ = Person.prototype; // 표준 아님
PersonPlus.prototype = Object.create(Person.prototype);

PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20 ,30);

console.log('====================================');
console.log("kim => sum", kim.sum()); // PersonPlus에서도 sum을 사용 가능
console.log('====================================');