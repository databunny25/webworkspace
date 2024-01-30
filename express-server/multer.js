const multer = require('multer');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'files/');
    },
    filename : function(req, file, cb){
        let rename = (new Date()).getMilliseconds() + file.originalname;
        cb(null, rename);
    }
});

const upload = multer({ storage : storage });

const staticUrl = '/images';
app.use(staticUrl, express.static('files'));

app.post('/profile', upload.single('avatar'), (req, res) => {
    // <img src=""> -> src속성이 가져야하는 경로 반환
    let imgUrl = `${staticUrl}\/${req.file.filename}`;
    res.send(imgUrl);
});

app.post('/photos', upload.array('list'), (req, res) => {
    // <img src=""> -> src속성이 가져야하는 경로 반환
    let imgUrlList = [];
    for(let file of req.files){
        let imgUrl = `${staticUrl}\/${file.filename}`;
        imgUrlList.push(imgUrl);
    }
    res.send(imgUrlList);
});

app.listen(4000, () => {
    console.log('Server Start : multer');
});