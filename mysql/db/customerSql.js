//customerSql.js

let customerList =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers`;

let customerInfo =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?`; 
// 1) 배열인지 아닌지 : 물음표 갯수
// 2) ? 별로 객체타입인지 아닌지 : 어느 컬럼에 들어가는 값인지 구분 가능여부

let customerInsert = 
`INSERT INTO customers
SET ?`; // 객체, 필드명 == 컬럼명

let customerUpdateAll = 
`UPDATE customers
SET ?
WHERE id = ?`; // 배열[ 객체 , 단일값 ]

let customerUpdateInfo = 
`UPDATE customers
SET email = ?, phone = ?, address =?
WHERE id = ?`; // 배열[ 단일값, 단일값, 단일값, 단일값 ]

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}