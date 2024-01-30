const fs = require('fs');
const express = require('express'); // express는 모듈
const userRouter = require('./user.js'); //얘는 우리가 임의로 만든 파일...not모듈...경로 찾아가야 함
const app = express();


// 미들웨어
//-- Request Data Process
// application/json
app.use(express.json({
    limit : '50mb'
}))
// app.use -> 전체 라우터 적용
// app.METHOD -> 특정 라우터에 적용


// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}))

// Error
app.use(function(err, req, res, next){
    console.log(err);
    res.status(500).json({statusCode : res.statusCode,
                          errMessage : err.message});
});


app.get('/defaultErr', (req, res)=>{
    throw new Error('기본 핸들러 동작');
})

app.get('/customErr', (req, res, next)=>{
    next(new Error('Process Fail! Check Data!'));
})


// static
app.use(express.static('./files'));
app.use('/public', express.static('./files'));



// Data Loding
const jsonFile = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile);

const getData = (target, where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

// app.js가 가진 라우팅에 대해서 목적에 따라 파일을 분리하고 세분화해서 매핑시킴(실행하면 app.js가 가진 라우팅을 실행하는 것이다)
// app.js의 파일 길이를 너무 늘리지 말것!
app.use('/user', userRouter); //라우터와 매핑시킴...

// listen : 서버 실행
app.listen(3000, ()=>{
    //console.log('http://localhost:3000');
    console.log('Server Start');
})

app.get('/', (req, res)=>{
    res.send('Hello, Express.js World');
})

//전체조회
app.get('/posts', (req, res)=>{
    let data = getData('posts');
    res.json(data);
});

//단건조회
app.get('/posts/:id', (req, res)=>{
    let postId = req.params.id;
    let data = getData('posts', postId);
    res.json(data);
});


//등록
app.post('/posts', (req, res) => {
    let data = req.body;
    console.log('등록', data);
    dmlData('posts', {method : 'post', data}) //덜 적었다ㅠㅠ
    res.json(data);
});

// 수정
app.put('/posts/:id', (req, res)=>{
    let postId = req.params.id;
    let data = req.body; //req.body[0]; 이렇게 특정값을 사용할수도 있다
    console.log('수정', postId, data);
    res.json({id : postId, data});
});

// 삭제
app.delete('/posts/:id', (req, res)=>{
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203);
});


//전체조회 - comments
app.get('/comments', (req, res)=>{
    let data = getData('comments');
    res.json(data);
});
//상세조회 - comments
app.get('/comments/:id', (req, res)=>{
    let postId = req.params.id;
    let data = getData('comments', postId);
    res.json(data);
});
//조회 - profile
app.get('/profile', (req, res)=>{
    let data = getData('profile');
    res.json(data);
});


// 검색을 포함하는 경우 -> QueryString
// list[0].id=100&list[0].name=Hong&...
app.get('/search', (req, res)=>{
    let keywords = req.query;
    console.log('검색조건 구성', keywords);
    res.json(keywords);
})