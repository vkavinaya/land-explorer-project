const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const { error, info } = require('console');

const app = express();
const PORT = process.env.PORT || 12000;


app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    
    if (username && password) {
        
        res.redirect('kavi2.html');
    } else {
        res.status(400).send('Username and password are required!');
    }
});


app.use(express.static(path.join(__dirname)));

app.get('/kavi',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi.html'))
});
app.get('/welcome',(req,res) => {
    res.sendFile(path.join(__dirname,'added.html'))
});




app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi3about.html'))
    
});
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi.html'))
});
app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi4contactus.html'))
});
app.get('/logout',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi.html'))
});
app.get('/property',(req,res) => {
    res.sendFile(path.join(__dirname,'select.html'))
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'kavi.html'));
});
app.get('/prop',(req,res) => {
    res.sendFile(path.join(__dirname,'select.html'))
});




app.get('/chennaicanara',(req,res) => {
    res.sendFile(path.join(__dirname,'chennaicanara.html'))
    
});
app.get('/chennaisbi',(req,res) => {
    res.sendFile(path.join(__dirname,'chennaisbi.html'))
    
});
app.get('/chennaiindian',(req,res) => {
    res.sendFile(path.join(__dirname,'chennaiindian.html'))
    
});
app.get('/chennaiunion',(req,res) => {
    res.sendFile(path.join(__dirname,'chennaiunion.html'))
    
});
app.get('/chennaibaroda',(req,res) => {
    res.sendFile(path.join(__dirname,'chennaibaroda.html'))
    
});
    






app.get('/coimbatorecanara',(req,res) => {
    res.sendFile(path.join(__dirname,'coimbatorecanara.html'))
    
});
app.get('/coimbatoresbi',(req,res) => {
    res.sendFile(path.join(__dirname,'coimbatoresbi.html'))
    
});
app.get('/coimbatoreindian',(req,res) => {
    res.sendFile(path.join(__dirname,'coimbatoreindian.html'))
    
});
app.get('/coimbatoreunion',(req,res) => {
    res.sendFile(path.join(__dirname,'coimbatoreunion.html'))
    
});
app.get('/coimbatorebaroda',(req,res) => {
    res.sendFile(path.join(__dirname,'coimbatorebaroda.html'))
    
});




app.get('/kanchipuramcanara',(req,res) => {
    res.sendFile(path.join(__dirname,'kanchipuramcanara.html'))
    
});
app.get('/kanchipuramsbi',(req,res) => {
    res.sendFile(path.join(__dirname,'kanchipuramsbi.html'))
    
});
app.get('/kanchipuramindian',(req,res) => {
    res.sendFile(path.join(__dirname,'kanchipuramindian.html'))
    
});
app.get('/kanchipuramunion',(req,res) => {
    res.sendFile(path.join(__dirname,'kanchipuramunion.html'))
    
});
app.get('/kanchipurambaroda',(req,res) => {
    res.sendFile(path.join(__dirname,'kanchipurambaroda.html'))
    
});




app.get('/maduraicanara',(req,res) => {
    res.sendFile(path.join(__dirname,'maduraicanara.html'))
    
});
app.get('/maduraisbi',(req,res) => {
    res.sendFile(path.join(__dirname,'maduraisbi.html'))
    
});
app.get('/maduraiindian',(req,res) => {
    res.sendFile(path.join(__dirname,'maduraiindian.html'))
    
});
app.get('/maduraiunion',(req,res) => {
    res.sendFile(path.join(__dirname,'maduraiunion.html'))
    
});
app.get('/maduraibaroda',(req,res) => {
    res.sendFile(path.join(__dirname,'maduraibaroda.html'))
    
});



app.get('/trichycanara',(req,res) => {
    res.sendFile(path.join(__dirname,'trichycanara.html'))
    
});
app.get('/trichysbi',(req,res) => {
    res.sendFile(path.join(__dirname,'trichysbi.html'))
    
});
app.get('/trichyindian',(req,res) => {
    res.sendFile(path.join(__dirname,'trichyindian.html'))
    
});
app.get('/trichyunion',(req,res) => {
    res.sendFile(path.join(__dirname,'trichyunion.html'))
    
});
app.get('/trichybaroda',(req,res) => {
    res.sendFile(path.join(__dirname,'trichybaroda.html'))
    
});

app.get('/logoin',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi.html'))
    
});

app.get('/loginpls',(req,res) => {
    res.sendFile(path.join(__dirname,'kavi2.html'))
    
});
 

app.listen(PORT, () => {
    console.log`(Server is running on port ${PORT})`;
});  