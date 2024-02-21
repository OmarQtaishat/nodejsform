
const express= require('express')

var app= express();


app.get('/form.html',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted"+req.body.email+req.body.password)
})

var server = app.listen(7060,function()
{
    var host= server.address().adress
    var port=server.address().port
})