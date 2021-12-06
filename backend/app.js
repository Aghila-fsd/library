const express = require('express');
const port = process.env.PORT || 2017;

const Authordata=require('./src/model/Authordata');
const Bookdata=require('./src/model/Bookdata');
const Userdata=require('./src/model/Userdata');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const { title } = require('process');
const path = require('path');

var bodyparser=require('body-parser');
var app = new express();

app.use(express.static(`./dist/libraryapp`));

app.use(bodyparser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
username='admin';
password='1234';

/*login start*/
function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
     req.userId = payload.subject
    next()
  }
  app.post('/api/login', (req, res) => {
    const uname = req.body.uname;
    const pwd = req.body.password;
    signupSchema.findOne({email:uname, password:pwd}, function(err,user)
            {           
              if(uname=="admin" && pwd=="1234")
                {  
                            
                  let payload = {subject: username+password}
                  let token = jwt.sign(payload, 'secretKey')
                  res.status(200).send({token})              
                }
              else if(user)  {
                let payload = {subject: username+password}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})   
              }
                else    
                {
                  res.status(401).send('Invalid Username/password')      
                  console.log("Invalid user name/password"); 
                } 
                 
                
            })
          })
   

/*login end*/


app.get(`/*`, function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/libraryapp/index.html'));
   });
   


/*bookpage start*/
app.post('/api/insertbook',verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
    console.log(req.body);
   
    var book = {       
        bookid : req.body.book.bookid,
        title : req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre, 
            imageUrl : req.body.book.imageUrl,
   }       
   var book = new Bookdata(book);
   book.save();
});
app.get('/api/books',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/api/:id',  (req, res) => {
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})
app.put('/api/Updatebook',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    bookid = req.body.book.bookid,
    title = req.body.book.title,
    author = req.body.book.author,
    genre =  req.body.book.genre, 
    imageUrl  = req.body.book.imageUrl,
   Bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"bookid":bookid,
                                "title":title,
                                "author":author,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/api/remove/:id',(req,res)=>{
 
   id = req.params.id;
   Bookdata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

/*Bookpage end*/


/*authorpage start*/
app.post('/api/insertauthor',verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
    console.log(req.body);
   
    var author = {       
        authorid : req.body.author.authorid,
        author: req.body.author.author,
        title: req.body.author.title,
        genre: req.body.author.genre, 
        imageUrl : req.body.author.imageUrl,
   }       
   var author = new Authordata(book);
   auth+or.save();
});
app.get('/api/authors',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")  
    Authordata.find()
                .then(function(authors){
                    res.send(authors);
                });
});
app.get('/api/:id',  (req, res) => {
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
  const id = req.params.id;
    Authordata.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})
app.put('/api/Updateauthor',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    authorid = req.body.author.authorid,
    author = req.body.author.author,
    title = req.body.author.title,
    genre =  req.body.author.genre, 
    imageUrl  = req.body.author.imageUrl,
   Authordata.findByIdAndUpdate({"_id":id},
                                {$set:{"authorid":authorid,
                                "author":author,
                                "title":title,
                                "genre":genre,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
 
app.delete('/api/remove/:id',(req,res)=>{
 
   id = req.params.id;
   Authordata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

/*authorpage end*/

/*signup page*/
pp.post("/api/signup",function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,DELETE")
  console.log(req.body);
 
  var users = {       
      username : req.body.item.uname,
      email : req.body.item.email,
      password : req.body.item.password,
      Repeatpassword : req.body.item.cpassword,
     
 }       
 var user = new Userdata(users);
 user.save();
})



app.listen(port, () => {
  console.log("Server is ready at port no:" + port);
});