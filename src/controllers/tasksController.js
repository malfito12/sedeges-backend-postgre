const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.getTasks = ((req, res) => {
    conn.query('SELECT * FROM tasks',(err,docs)=>{
        if(err){
            console.log('error de db')
        }else{
            res.json(docs)
        }
    })
})
controllers.getTask = ((req, res) => {
    res.send('hola que ashe')
})
controllers.getTaskCount = ((req, res) => {
    conn.query('SELECT COUNT(*) FROM tasks',(err,docs)=>{
        if(err){
            res.status(300).json({message:'error en la base de datos'})
        }else{
            res.status(200).json(docs[0]['COUNT(*)'])
        }
    })
})
controllers.postTasks = ((req, res) => {
    res.send('hola que ashe')
})
controllers.putTasks = ((req, res) => {
    res.send('hola que ashe')
})
controllers.deleteTasks = ((req, res) => {
    res.send('hola que ashe')
})

module.exports = controllers