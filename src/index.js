const express=require('express')
const app=express()
const cors= require('cors')

//settings
app.set('port',process.env.PORT || 3000)
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({
    limit:'50mb',
    extended:true
}))
app.use(cors())


app.use(require('./models/loginRouter'))
app.use(require('./models/usersRouter'))
app.use(require('./models/studentsRouter'))
app.use(require('./models/eventsRouter'))
app.use(require('./models/testRouter'))
app.use(require('./models/resultsTestAptitudesRouter'))
app.use(require('./models/resultsTestInteresesRouter'))
app.use(require('./models/receptionsRouter'))
app.use(require('./models/resultTestMaduresRouter'))
app.use(require('./models/archivosRouter'))

app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
})

