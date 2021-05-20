const express = require('express');
const app = express();
const fetch = require("node-fetch");
const fileUrl = 'http://norvig.com/big.txt'

// creacion del objecto que va mantener la info del api
var commonWords =[
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    },
    { 
        "cuenta" : 0, 
        "palabra": ""
    }

];

// obtencion de la api externa
fetch(fileUrl)

   .then( r => r.text() )

    .then(data => {
        // separacion de palabras
        const words = data.split(" ");
        // variable que va a almacenar las palabras repetidas y cuantas son
        var wordCounts = { };
       
        // ciclo que recorre words por medio de su largo donde si se repite se le suma uno al contador de wordcount
        for(var i = 0; i < words.length; i++){
            wordCounts[words[i].toLowerCase()] = (wordCounts[words[i].toLowerCase() ] || 0) + 1;  
        };


        // pasamos las palabras mas repetidoas al objeto y se van en orden descendente
        for(const key in wordCounts){
            if(wordCounts[key] > commonWords[0]["cuenta"]){
                commonWords[0]["cuenta"] = wordCounts[key];
                commonWords[0]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[0]["cuenta"]);
            }else if(wordCounts[key] > commonWords[1]["cuenta"]){
                commonWords[1]["cuenta"] = wordCounts[key];
                commonWords[1]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[1]["cuenta"]);
            }else if(wordCounts[key] > commonWords[2]["cuenta"]){
                commonWords[2]["cuenta"] = wordCounts[key];
                commonWords[2]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[2]["cuenta"]);
            }else if(wordCounts[key] > commonWords[3]["cuenta"]){
                commonWords[3]["cuenta"] = wordCounts[key];
                commonWords[3]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[3]["cuenta"]);
            }else if(wordCounts[key] > commonWords[4]["cuenta"]){
                commonWords[4]["cuenta"] = wordCounts[key];
                commonWords[4]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[4]["cuenta"]);
            }else if(wordCounts[key] > commonWords[5]["cuenta"]){
                commonWords[5]["cuenta"] = wordCounts[key];
                commonWords[5]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[5]["cuenta"]);
            }else if(wordCounts[key] > commonWords[6]["cuenta"]){
                commonWords[6]["cuenta"] = wordCounts[key];
                commonWords[6]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[6]["cuenta"]);
            }else if(wordCounts[key] > commonWords[7]["cuenta"]){
                commonWords[7]["cuenta"] = wordCounts[key];
                commonWords[7]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[7]["cuenta"]);
            }else if(wordCounts[key] > commonWords[8]["cuenta"]){
                commonWords[8]["cuenta"] = wordCounts[key];
                commonWords[8]["palabra"] = Object.keys(wordCounts).find(key => wordCounts[key] === commonWords[8]["cuenta"]);
            }
        }


   

    })

// visualizacion del objeto como api
app.get('/api/words',(req,res)=>{
    res.send(JSON.stringify(commonWords,null,2));  
});


app.listen(3000, ()=> console.log("listening in port 3000"))