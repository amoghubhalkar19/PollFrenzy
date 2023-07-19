const express = require('express');
const path= require('path');
const fs= require('fs');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});


app.post('/create', (req, res)=>{
    const data=req.body.data;
    console.log("post req accepted");

    
    fs.writeFileSync('./data.json', JSON.stringify(data), err =>{
        if(err){
            console.log("something went wrong");
        }
        else{
            console.log("submitted successfully");
        }
    })

})