console.log('arrow.js');
//cmd 터미널 창 폴더 안에서 node arrow.js 입력시, js파일 컴파일하고 실행해서 결과를 보여준다


// 함수 선언식 => var 선언자 (와 동일하다)
function hello(name){
    console.log(name);
}

function hello(msg){
    console.log('출력 : ' + msg);
}

//hello2(); //오류발생! const처럼... 선언 전에 불러낼수는 없다!

//함수 표현식 => const 선언자 (...권장!)
const hello2 = function(name){
    console.log('hello, ' + name);
}

const hello3 = (name) => console.log('hello, ' + name);

hello3('Javascript');




// 화살표 함수 문법
let msg = msg => console.log('result, ' + msg);
msg = () => console.log('hello, World');
msg = (x,y) => console.log(x+y);

msg = (x, y) => {
    let result = x + y;
    console.log(result);
}

console.clear();

// 화살표 함수와 this의 연관성
let array = [1,3,5,7];

array.forEach(function(value, idx){
    console.log(value, this); //this는 지금 작용하는 태그를 반환...지금은 node가 가진 내장객체가 나옴...
});
array.forEach((value, idx)=>{
    console.log(value, this);
}) // 화살표 함수는 this 작용 X 아무것도 안 나온다
// addEventListener , 콜백 화살표 함수 -> this사용 X

