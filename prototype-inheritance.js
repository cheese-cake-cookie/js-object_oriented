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

// 이는 subObject.superVal = 'sub'; 코드는 subObject 객체값을 바꾼 것이지
// __proto__ 가 가르키는 객체를 바꾼 것이 아니기 때문이다.