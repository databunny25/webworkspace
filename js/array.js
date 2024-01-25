console.log('array.js');

// sort()    : 정렬함수 - 오름차순
// reverse() : 정렬함수 - 내림차순

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
// 1, 5, 10, 25, 40, 100
points.sort();
console.log(points);

points.sort(function(a,b){
    // 오름차순
    return a-b; //sort는...이 값이 음수면, 순서를 그대로 둔다 (오름차순)
});





// filter : 기존 배열 -기준-> 새로운 배열
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let result = words.filter((a,b,c,d,e)=>{
//     console.log(a,b,c,d,e);
// });

let result = words.filter((value, idx)=>{
    // return 데이터 타입 boolean
    //return value.length > 6;
    return value.indexOf('a') > -1;
});

console.log(result);

let userList = [ 
                { id : 100, name : 'Hong'},
                { id : 200, name : 'Kang'},
                { id : 300, name : 'Han'}
                ];

let newList = userList.filter(obj => {
    return obj.name.indexOf('g') > -1;
})
console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
});
console.log(userList, newList);
// newList에만 적용했는데 userList도 바뀜!
// filter는 기본타입에서는 아니지만, 참조타입(배열)에서는 종속적이라서 주의! (새 배열에서 적용해도 원 배열에서도 바뀐다...주소값을 참조하므로)





// map () : 기존 배열 -기준+조작-> 새로운 배열
userList = [ 
            { id : 100, name : 'Hong'},
            { id : 200, name : 'Kang'},
            { id : 300, name : 'Han'}
            ];

let newArray = userList.map(function(obj){
    // return 데이터 타입 제한없음
    return obj.id < 300 ? obj.name : null;
});
console.log(userList, newArray); //map은 배열의 길이를 줄일 수는 없다

console.clear();

// map을 이용하면 filter와 달리, 새로운 배열을 만들 수 있다(참조타입이라도)
newList = userList.map((obj)=>{
    return {
        id : obj.id,
        name : obj.name
    };
});

console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20; //newList에만 들어간다!
});

console.log(userList, newList);




// reduce() : 누적합계
let nums = [ 50, 12, 999, 6, 100];
let sumRes = nums.reduce(function(total, value){
    return total + value;
}, 0);

console.log(sumRes);
