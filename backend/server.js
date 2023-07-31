const express = require('express');
const path = require('path');
const fs = require('fs');
const exp = require('constants');
const app = express();
const port = 3000;

app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.post('/create', (req, res) => {
    console.log("post req accepted");
    const data = req.body;
    console.log(data);

    var baseData = []
    const jsonString = fs.readFileSync('./data.json', { encoding: 'utf-8' });
    console.log(jsonString);
    jsonObj = JSON.parse(jsonString);
    baseData.push(jsonObj);
    baseData.push(data);
    console.log(baseData);
    fs.writeFileSync('./data.json', JSON.stringify(baseData), err => {
        if (err) {
            console.log("something went wrong");
        }
        else {
            console.log("submitted successfully");
        }
    })

})


app.post('/vote', (req, res) => {
    console.log("vote req accepted");
    const voteid = req.body;
    let id=voteid.id;
    
    console.log(id);
})



//search id
//make a compo to vote now
//return data to compo
//keep record of no. of votes to each option
//return data to monitor section--live
//send email of id thru nodemailer

