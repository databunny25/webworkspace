console.log('Template Literals');

let subject = 'Javascript';
let tool = 'VS code';

// 현재 수업은 "Javascript"를 진행하고
// 사용하는 툴은 "VS Code"입니다.

let msg = '현재 수업은 "' + subject + '"를 진행하고';
console.log(msg);
msg = '사용하는 툴은 "' + tool + '"입니다.';
console.log(msg);

msg = 
`현재 수업은 "${subject}"를 진행하고
사용하는 툴은 "${tool}"입니다.`;
console.log(msg);

console.clear();




// Spread Operator
console.log('Spread Operator');

//배열
let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [arr1, arr2];
console.log(arr3);
arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let word = "Hello";
// H e l l o
let alphabet = [...word, "J", "S"];
console.log(alphabet);

// Array.isArray(arr3); 배열인지 체크!




let user = {
            id : 100,
            name : "Hong",
            age : 20,
            address : "Daegu"
};
// 배열의 내부 속성 값을 순환 하는 것이 가능하다
let info = [];
for( let field in user){
    // user.name => {name : "js"}
    // user.field 사용 불가
    console.log(field, user[field]);
    // 객체 -> 배열
    info.push(field);
}
console.log(info);