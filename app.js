const express = require('express');
const mongoose = require('mongoose')
const app = express();
let Article = require('./models/article')
const path = require('path')


mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;
db.once('open', ()=> {
    console.log('connected')
})
//check db for erros 
db.on('error', (err)=>{
    console.log(err)
})

app.get('/', (req, res)=> { 
    Article.find({}, (err, articles)=>{
        if(err){
            console.log('err')}
        else {
            res.render('index', {
                title:'Blog',
            articles: articles})

        }
        })
        
    })
    
   
   


app.get('/add', (req, res)=> {

    res.render('add_article')
})

app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'pug')


app.listen(3000, ()=>{
    console.log('server started on port 3000')
})
