const express=require('express')
const app=express()
const tasksRoutes=require('./models/tasksRouter')
const cors= require('cors')

//settings
app.set('port',process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use(tasksRoutes)
app.use(require('./models/usersRouter'))
app.use(require('./models/loginRouter'))

app.listen(app.get('port'),()=>{
    console.log('server on port 3000')
})

