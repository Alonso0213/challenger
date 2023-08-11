//databases configuration

require("dotenv").config()
const{createPool}=require("mysql")
const connection = createPool({
    host: process.env.dbHost,
    dataBase: process.env.dbName,
    user: process.env.dbUser,
    password:process.env.dbPwd,
    multpleStatements:true,
    connectionLimit: 30

})
modulue.exports ={
    connection
}