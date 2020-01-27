# 자바스크립트의 객체지향

### 객체란 ?
- 서로 연관된 변수와 함수를 그룹핑하여 이름을 붙인 것

- 객체의 속성에 접근할 때 속성값은 변수가 될 수 없다. 배열에서 사용하는 대괄호를 사용해서 출력 가능.

```javascript
const obj = {
    manager: 'mia',
    developer: 'mei',
    designer: 'min'
};

for (var i in obj) {
    console.log(obj.i); // undefined
    console.log(obj[i]); // 정상 출력
}
```

- javascript에는 Math와 같은 내장 객체가 이미 존재한다.

### javascript의 this
- this는 '나' 가 될 수 있는 모든 객체를 지칭하는 대명사이자 약속된 키워드.
- 객체에서의 this는 메서드 혹은 변수가 속하는 객체를 가르키도록 약속된 특수한 예약어이다.

### constructor (생성자) - 객체를 양산해보자
- `console.log([Object name])` 출력 시 `native code` 로 출력되는 것들은 내장 객체라는 의미.

- 함수 앞에 new 가 붙어있다면 맥락상으로 생성자 함수라는 의미.

일반 함수 호출 `functionName();` 생성자 함수 호출 `new functionName();`

#### 생성자 함수는 무엇인가? 그렇다면 생성자함수를 쓰는 이유는?
- 생성자 함수는 객체를 생성하는 함수이다. 더 쉽게 말하자면 객체를 찍어낼 수 있는 함수이다. 
- 객체를 그냥 생성하는 것과 생성자 함수를 사용하여 생성하는 것에 차이가 있기 때문에 생성자 함수를 사용하게 됨. 객체를 하나씩 생성하는 경우에는 동일한 값을 수정한다고 해도 객체의 수만큼 일일히 수정해야 함. 하지만 생성자 함수를 통해 객체를 생성한다면 생성자 함수로 생성하게 되는 객체 하나만 수정해주게 되면 생성자 함수를 통해 생성되는 모든 객체에게 동일하게 적용됨. 이로 인하여 코드가 간결해지고 재사용성도 높아지게 된다.

- 객체를 생성 후 반환함
- 객체의 초기상태를 결정함


### prototype - 한글 뜻은 '원형'
자바스크립트는 prototype based language 라고 불릴 만큼 prototype이 중요한 개념.

- 프로토타입이 없다면 객체 내에 정의한 함수는 생성자 함수로 객체가 생성될 때마다 같은 기능을 하더라도 늘 메모리에 할당되게 됨.

```javascript
function Person (name ,first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function () {
        return this.first + this.second;
    }
}

var kim = new Person('MIA', 10, 20);
var lee = new Person('JIA', 10, 20);

console.log(kim.sum()); // 30
console.log(lee.sum()); // 30
```

위 코드와 같이 정의된 생성자 함수를 통해서 만든 Person의 객체들은 객체의 수만큼 sum이라는 메소드가 정의되며 이는 곧 메모리에 그만큼의 할당이 이루어짐을 의미한다. 예시에는 2개의 객체 뿐이지만 생성한 객체가 1억개라면?


```javascript

function Person (name ,first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

// prototype을 사용하여 Person 함수의 sum 이라는 메소드의 원형을 정의함
Person.prototype.sum = function () {
    return this.first + this.second;
}

var kim = new Person('MIA', 10, 20);
var lee = new Person('JIA', 10, 20);
```

위의 코드에서 sum이라는 메소드를 정의하는 코드는 단 한번만 실행된다. 객체 생성시 매번 실행되지 않음.


// 프로토타입으로 선언된 메소드는 객체가 생성될 때마다 실행되지 않는다.
// 정의 또한 한번만 정의되기 때문에 메모리를 낭비하지 않는다.
// 프로토타입으로 선언한 메소드는 모든 객체가 공유해서 사용하게 됨

- 프로토타입의 의미란?
- 프로토타입을 사용하지 않고 생성자함수 안에서 메소드나 속성을 정의하게 되면 어떤 비효율이 발생하는가? 그렇다면 이 비효율은 프로토타입을 사용하면 어떻게 극복 가능한가?

### class
- 자바스크립트는 ES6 이전까지 class라는 개념이 존재하지 않음. prototype을 통해 객체지향을 구현하였으나 기존 언어들의 객체지향 방식에 익숙한 사용자들의 편의를 위해 javascript에서도 class를 사용할 수 있도록 ES6부터 해당 문법을 추가함.
- 객체를 찍어낼 수 있는 constructor (생성자)의 대체제 역할을 할 수 있다.

- class 또한 객체를 만드는 공장이다.
- 생성자 함수는 생성된 객체의 초기 상태까지 세팅해준다. class에서 이 역할을 하는 약속된 메소드가 constructor 메서드이다. javascript는 객체 생성 시 이 constructor 메서드를 자동으로 호출한다.

### 상속 (Inheritance)
- 상속은 왜 필요한지?
- 상속을 통해 무엇을 할 수 있는지?
    중복된 코드를 제거하며 기존 객체의 기능도 사용 가능하게 됨으로서 필요한 기능만 부분적으로 확장 가능하기 때문에 유지보수도 용이하다.


### super - 상속으로 인해 발생하는 자잘한 문제를 해결하자
- 부모가 할 수 있는 일은 최대한 부모에게 시키고 부모가 하지 못하는 일만 내가 해결하자!

- super가 없을 때의 불편함은? 그렇다면 super를 사용했을 때의 이점은?
- super로 인하여 상속으로 생기는 불편함을 어떻게 해소할 수 있는가?

### 주류 객체지향 언어와 자바스크립트에서의 상속 차이
- 주류 객체지향 언어: 클래스가 상속을 받음
- 자바스크립트: 객체가 직접 다른 객체의 상속을 받을 수 있으며 필요하다면 다른 객체로부터 상속도 받을 수 있음 (prototype link)를 통해서. 이때 상속의 대상이 되는 객체를 `prototype object` 라고 부른다

```javascript
var superObject = { superVal: 'super' };
var subObject = { subVal: 'sub' };

// 이 별개의 객체를 prototype link를 통해 부모 - 자식 관계로 만들 수 있다.

// subObject의 원형으로 superObject를 지정하겠다 라는 의미
subObject.__proto__ = superObject;

console.log('subObject.subVal =', subObject.subVal);

// subObject에는 superVal이 없음에도 불구하고 prototype link로 연결되어 접근 가능하게 됨.
console.log('subObject.superVal =', subObject.superVal);

// 그렇다면 subObject의 원형인 superObject를 오버라이딩 가능할까?
subObject.superVal = 'sub';

// 여전히 super를 출력한다.
console.log('superObject.superVal =', superObject.superVal); // super

// 이는 subObject.superVal = 'sub'; 코드는 subObject 객체값을 바꾼 것이지 __proto__ 가 가르키는 객체를 바꾼 것이 아니기 때문이다.
```

*하지만 이 방식은 javascript가 인정하는 공식 방식에 해당하지 않음*

### Object.create() - javascript 권장 방식
```javascript
// __proto__ 를 사용한 상속
var superObj = { superVal: 'superVal' };
var subObj = { subVal: 'subVal' };

subObj.__proto__ = superObj;

// Object.create() 를 사용해 __proto__ 방식과 동일하게 구현한 상속
var superObj = { superval: 'superVal' };
var subObj = Object.creaet(superObj);

subObj.subVal = 'superVal';
```
- Object.create 메서드는 새로운 객체를 만드는 메서드.
- 이때 인자로 받는 객체를 부모로 하는 새로운 객체를 반환한다.

### call - 함수를 실행하는 또다른 방법
```javascript
var kim = {
    name: 'kim',
    first: 10,
    second: 20
};

var lee = {
    name: 'lee',
    first: 10,
    second: 20
};

function sum () {
    return (this.first + this.second);
}

// sum(); 과 동일하게 sum 함수를 실행시키는 방법에는
//sum.call(); 으로 가능 모든 함수들은 동일하게 call이라는 메소드를 가지고 있다. (자바스크립트에서는 함수조차도 객체이기 때문에 가능)

// sum.call(kim);
console.log(sum.call(kim));
// 위의 코드처럼 call을 사용해 실행된 함수는 call의 인자로 받은 객체 kim을 this로 갖는다.

// call 메서드는 첫번째 인자로 this로 사용될 argument 두번째 인자부터 함수의 인자로 사용될 파라미터를 받는다
```
- call()과 유사한 기능을 하는 메서드로는 `apply`가 있다

### bind - 메서드가 내부적으로 사용할 this로 사용될 객체를 바인딩하는 새로운 메서드를 반환한다

### prototype과 `__proto__`
- 함수란 무엇인가: javascript에서는 함수 또한 객체이다
```javascript
function Person() {};
var Person = new Function();
```

이 둘은 완벽하게 동일한 코드이다. javascript에서는 함수 또한 객체이기 때문에 함수가 갖는 **프로퍼티**를 가질 수 있다.

객체의 `prototype` 프로퍼티는 prototype의 `constructor`라는 프로퍼티와 서로 상호 참조관계.

즉 prototype을 통해서 생성된 메서드는 해당 prototype을 prototype으로 가지고 있는 객체의 constructor 메서드를 통해 생성된다.

객체를 가지고 만든 해당 객체의 인스턴스는 `__proto__` 라는 프로퍼티를 갖는데 이 프로퍼티는 객체의 `prototype`과 연결됨 객체의 `prototype` 프로퍼티는 prototype의 프로퍼티인 `constructor`로 결국 연결되게 되어있음.

이런 의미에서 `__proto__` 가 결국은 prototype으로의 링크 역할을 함.

즉 `Date.prototype.constructor === Date` 가 `true` 가 된다.

- 이런 프로세스로 객체가 자체적으로 가지고 있지 않은 요소들을 탐색해나가는 것이다.


### 자바스크립트의 상속 방법
1. 객체-객체간의 직접 상속
2. class, ES6 이전의 경우 constructor()를 통한 상속

**class** 를 통한 상속이 간결하며 안정성이 높다

- constructor를 사용한 상속
```javascript
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
PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20 ,30);
```

그렇다면 PersonPlus에서도 prototype으로 정의된 sum 메소드를 사용할 수 있게 하려면 어떻게 해야할까?
- PersonPlus 객체의 인스턴스의 __proto__ 프로퍼티를 Person 객체의 prototype과 연결한다

```javascript
// 상단 코드 생략
PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
}
// PersonPlus.__proto__ = Person.prototype; // 비표준 방식
PersonPlus.prototype = Object.create(Person.prototype);

var kim = new PersonPlus('kim', 10, 20 ,30);

console.log(kim.sum()); // 60;
```

### constructor라는 property가 갖는 의미
- 객체의 인스턴스의 constructor 프로퍼티는 결국 인스턴스의 기반이 되는 객체의 prototype 프로퍼티와 연결된다.

- 객체의 프로퍼티 prototype 또한 객체이며 constructor 프로퍼티를 갖는데 constructor 프로퍼티가 가리키는것은 결국 그 객체이다.

만약 코드작성 중 해당 인스턴스의 원형 객체가 무엇인지 헷갈린다면 브라우저 콘솔창에 `인스턴스.constructor` 를 실행해보면 그 인스턴스의 원형 객체를 확인할 수 있다.

예시) 
```javascript
var d = new Date();
console.log(d.constructor); // f Date() { [native code] }
```
위와 같이 인스턴스를 찍어내는 `공장`, 인스턴스를 만드는 `신`을 반환함
