require('dotenv').config({ path : './db/dbSetting.env'})
const express = require('express');
const app = express();
const mysql = require('./db.js');
// mysql.executeQuery();
// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false}));

app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
});

app.get('/users', async (req, res)=>{
    let list = await mysql.executeQuery('userList');
    res.json(list);
})

app.get('/users/:id', async (req, res) => {
    let userId = req.params.id;
    let info = (await mysql.executeQuery('userInfo',userId))[0];
    res.json(info);
})

app.post('/users', async (req, res)=>{
    let data = req.body.param;  
    let result = await mysql.executeQuery('userInsert', data);
    res.json(result);
})

app.put('/users/:id', async ( req, res ) => {
    let result = await updateAll(req);
    res.json(result);
});

async function updateAll(request){
    let data = [ selectedInfo(request.body.param) 
                , request.params.id]; // set절, user_id컬럼
    let result = await mysql.executeQuery('userUpdateAll', data);
    return result;
}

function selectedInfo(obj){
    let delData = ["user_id", "user_no"];
    let newObj = {};
    let isTargeted = null;    
    for( let field in obj ){ 
        isTargeted = false;
        for(let target of delData){
            if(field == target) {
                isTargeted = true;
                break;
            }            
        }
        if(!isTargeted){
            newObj[field] = obj[field];
        }
    }
    return newObj;
};

async function updateInfo(request){
    let data = [ ...getInfo(request.body.param) , request.params.id]; // 컬럼 : user_name, user_gender, user_age
    let result = await mysql.executeQuery('userUpdateInfo', data);
    return result;
}


function getInfo(obj){
    let getData = ["user_name", "user_gender", "user_age"];
    let newAry = []; 
    for(let target of getData){
        for(let field in obj ){        
            if(field == target) {
                newAry.push(obj[field]);
                break;
            }            
        }
    }
    return newAry; 
};

app.delete('/users/:id', async (req, res) => {
    let userId = req.params.id;
    let result = await mysql.executeQuery('userDelete',userId);
    res.json(result);
})