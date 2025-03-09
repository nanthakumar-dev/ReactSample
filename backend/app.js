const express=require('express')
const path=require('path')

const app=express()
const port=8000

app.use(express.static(path.join(__dirname,'../frontend/dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontend/dist/index.html'))
})

app.listen(port,()=>{
    console.log("server Connect Successfully")
})