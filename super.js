class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first + this.second;
    }
}

// class PersonPlus extends Person {
//     constructor(name, first, second) {
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }

//     avg() {
//         return (this.first + this.second) / 2;
//     }   
// }

// 위 코드에서 중복된 constructor 를 제거하고 싶을 때 super 를 사용하여 해결 가능하다.
class PersonPlus extends Person {
    constructor(name, first, second, third) {
        // 기존 부모 생성자가 가지고 있는 요소와 동일한 것들은 부모에게로
        super(name, first, second);
        // 부모를 상속받아 구현한 자식 객체에만 존재하는 것만 별도로 추가해준다.
        this.third = third;
    }

    sum() {
        // return this.first + this.second + this.third;
        // 이렇게 구현해도 동일하지만 만약 기존의 코드가 1억줄이라면?
        // + this.third 하나를 추가하기 위해 1억줄을 한번 더 써야하는 불필요한 짓을 해야 함
        
        // 이렇게 부모 클래스에서 받아올 수 있는 값은 그대로 받아온 후 필요한 값만 추가해준다.
        return super.sum() + this.third;
    }

    avg() {
        return (this.first + this.second) / 2;
    }   
}

// super(): 부모 클래스의 생성자를 의미한다.
// super.[]: .으로 접근하는 것은 부모클래스에 접근하는 것을 의미

var mia = new PersonPlus('MIA', 10, 20, 30);
console.log('====================================');
console.log(mia.sum());
console.log('====================================');