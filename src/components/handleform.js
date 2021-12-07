const bodyParser = require("body-parser")
const express = require("express")
const mysql = require("mysql");
const app = express()

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'epilepticpatientwarningdb'
});

app.post('/patientDetails', (req,res) =>{
    const sqlInsert = "INSERT INTO videoanalysis(id, url, flashTime) VALUES (3, \"https://www.youtube.com/watch?v=UvV_tu_-qGo\", \"1:00\");"
    db.query(sqlInsert, (err, result) =>{
})

});

app.listen(8000, () => {
    console.log("hello");
});