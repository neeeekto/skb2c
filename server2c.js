const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Orogin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req, res) =>{
    let usernameString = req.query.username;
    let error = false;
    if(!usernameString) error = true;

    let refExpArray = usernameString.match(/(https?:)?(\/\/)?(([\w.])[^\/]*\/)?(\/)?(@)?([\w.]*)/i);
    if(error){
        res.send('Invalid username')
    }
    else{
        res.send('@'+refExpArray[refExpArray.length-1])
    }
})


app.listen(3000, ()=>{
    console.log('Success! 3000 port run');
});