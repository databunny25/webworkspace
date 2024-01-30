const express = require('express');
const router = express.Router();

// user/
router.get('/', (req, res)=>{ //listen없다...라우터만 따로 실행할수는 없다
    res.send('회원정보조회');
});

// user/insert
router.post('/insert', (req, res)=>{
    res.send('회원 등록');
})

// user/update
router.put('/update', (req, res)=>{
    res.send('회원 수정');
})

// user/delete
router.delete('/delete', (req, res)=>{
    res.send('회원 삭제');
})


module.exports = router; //라우터는 객체(not module)...export하면 됨