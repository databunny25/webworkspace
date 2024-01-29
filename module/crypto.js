const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64'); //64자리를 기준으로 표시
console.log(data, encData);

encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('hex'); //base64보다 더 길게, 더 많은 암호화 작업
console.log(data, encData);

// salting 랜덤하게 무작위한 것들을 섞어서 해커가 알아보기 어렵게~
const createSalt = () => {
    return new Promise((resolve, reject)=>{
        crypto.randomBytes(64, (err, buf)=>{ //randomBytes(얼마만큼 돌릴것이냐, (err, 랜덤하게 생성된 값을 buffer가 들고 있다))
            if(err) reject(err);
            resolve(buf.toString('base64')); //그것을 몇 자리로 표현할 것인지~
        })
    })
}

const createCryptoPassword = 
    async(plainPassword) => {
        const salt = await createSalt(); //Promise가 비동기이므로...암호화 전에 salt가 발생하도록 await 해줘야함

        return new Promise((resolve, reject) => {
            crypto.pbkdf2(plainPassword,
                         salt,
                         9999,
                         64,
                         'sha512',
                         (err, key)=>{
                if(err) reject(err);
                resolve({ password : key.toString('base64'),
                          salt})
                         })
        })
    };

const cryptoPassword = async() => {
    encData = await createCryptoPassword(data);
    console.log(encData);
}
cryptoPassword();

//위 방식처럼 async await로 하기 싫으면 이렇게도 표현가능
createCryptoPassword(data)
.then(result => console.log(result))
.catch(err => console.log(err));