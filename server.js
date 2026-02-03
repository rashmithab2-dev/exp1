//importing express module
const express=require('express');
const app=express();
app.use(express.json());

const port=3000;

app.get('/',
    (req,res) =>{
        res.sendFile(__dirname + '/index.html');
    }
);

app.get('/login',
    (req,res) =>{
        res.sendFile(__dirname + '/login.html');
    }
);
app.get('/register',
    (req,res) =>{
        res.sendFile(__dirname + '/register.html');
    }
);
app.get('/welcome',
    (req,res) =>{
        res.sendFile(__dirname + '/welcome.html');
    }
);

app.post('/',
    (req,res)=>{
        res.redirect("/")
    });

app.post('/login',
    (req,res)=>{
        res.redirect("/login")
    });

app.post('/register',
    (req,res)=>{
        res.redirect("/register")
    });
app.post('/welcome',
    (req,res)=>{
        res.redirect("/welcome")
    });

//listen the server
app.listen(port,()=>{
        console.log(`Server is running: http://localhost:${port}/`);
    });