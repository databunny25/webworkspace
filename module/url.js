let data = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

// 레거시 API
const url = require('url');
let legercy = url.parse(data); //객체로 사용
console.log(legercy);

// WHATWG(웹표준) API
const whatwg = new URL(data);
console.log(whatwg);
console.log(whatwg.searchParams instanceof URLSearchParams); //클래스의 인스턴스로 사용 //POST 방식으로 내부에 쿼리 스트링을 사용할 때 많이 사용
console.log(whatwg.searchParams.get('query'));