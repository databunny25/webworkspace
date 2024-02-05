const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
});

app.get('/t_users', async (req, res)=>{
    let list = await mysql.executeQuery('t_usersList');
    res.json(list);
})

app.get('/t_users/:user_no', async (req, res) => {
    let t_usersNo = req.params.users_no;
    let info = (await mysql.executeQuery('t_usersInfo',t_usersNo))[0];
    res.json(info);
})

app.post('/t_users', async (req, res)=>{
    let data = req.body.param;
    let result = await mysql.executeQuery('t_usersInsert', data);
    res.json(result);
})

app.put('/t_users/:user_no', async ( req, res ) => {
    let result = await updateInfo(req);
    res.json(result);
});

async function updateAll(request){
    let data = [ selectedInfo(request.body.param)
                 , request.params.t_usersNo];
    let result = await mysql.executeQuery('t_usersUpdateAll', data);
    return result;
}

function selectedInfo(obj){
    let delData = ["user_no", "user_id"];
    let newObj = {};
    let isTargeted = null;
    for(let field in obj){
        isTargeted = false;
        for(let target of delData){
            if(field == target){
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
    let data = [ ...getInfo(request.body.param), request.params.user_no];
    let result = await mysql.executeQuery('t_usersUpdateInfo', data);
    return result;
}

function getInfo(obj){
    let getData = ["user_pwd", "user_name", "user_age"];
    let newAry = [];
    for(let target of getData){
        for(let field in obj){
            if(field == target){
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
};