var fs = require("fs") 


// Read File 
fs.readFile('read.js','utf-8',(error,data)=>{
     if(error){
        console.log(error);
     }else{
        console.log(data);
     }
})

// Write File

fs.writeFile("read.js","consolee.log(data)",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Written Successfully");
    }
})

// Append the data at the end

fs.appendFile("read.js","consolee.log('New Data')",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Appended Successfully...");
    }
})

//delete a file


fs.unlink('read.js',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("File is deleted");
    }

})