const fs= require('fs');
fs.readFile('./data1.json', 'utf-8', (err, jsonString)=>{
    if(err){
        console.log("heyy",err);
    }
    else{
        let data= JSON.stringify(jsonString);
        console.log(data.name);
    }
})

