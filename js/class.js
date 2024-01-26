console.log('class');

// ES6 이전
// 재생산을 위한 객체 => 생성자함수 + 즉시실행함수

// var Person = (function(){

//     function Person(name){
//         // 객체가 가질 필드
//         this._name = name;
//     }

//     // 객체가 가질 메소드
//     Person.prototype.sayHi = function(){
//         console.log('Hi ' + this._name);
//     }

//     // 필드에 접근할 Setter, Getter
//     Person.prototype.setName = function(name){
//         this._name = name;
//     }

//     Person.prototype.getName = function(){
//         return this._name;
//     }

//     return Person;
// })();

// let userA = new Person('Hong');
// userA.sayHi();
// userA.setName('Adward');
// userA.sayHi();




// ES6 - let, const 방식으로 동작한다
class Person {
    constructor(name){
        this._name = name;
    }

    sayHi(){
        console.log('Hi, new ' + this._name);
    }
    
    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let userB = new Person('Hong');
userB.sayHi();
userB.name = 'Lee'; // 세터가 없으면 동작 안한다!
console.log(userB.name);
userB.sayHi();
