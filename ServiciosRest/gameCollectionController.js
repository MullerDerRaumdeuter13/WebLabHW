'use strict'; 
 
var fs = require("fs"); //FileSystem lib
 
module.exports.obtener_juegos = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { //callback function para que no crasheen los errores
        if(err) console.log(err);
        console.log(data); 
        res.end(data); 
    }); 
}; 
 
module.exports.agregar_juego = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        const array = JSON.parse(data); 
        if(err) console.log(err);
        console.log(data); 
 
        const nuevo = req.body; 
        array.push(nuevo); 
 
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) { 
            console.log(data);
            if(err) console.log(err);
            res.end(err); 
        }); 
 
        res.end(JSON.stringify(array)); 
    }); 
}; 
 
module.exports.obtener_juego = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        if(err) console.log(err);
        const juegos = JSON.parse(data); 
        const juego = juegos[req.params.gameIndex] 
        console.log(juego); 
        res.end(JSON.stringify(juego)); 
    }); 
}; 

module.exports.eliminar_juego = function (req, res){
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        if(err) console.log(err);
        const array = JSON.parse(data);
        //console.log("Primer Array " + JSON.stringify(array));
        //console.log(err);
        //const elim = req.body.id;
        console.log("A eliminar" + elim);
        let counter = 0;
        for(let i=0; i<array.length; i++){
            let juego_id = array[i].id;
            console.log(array[i].id);
            if(juego_id == elim){
                console.log("deleted" + array[i].id)
                array.splice(i, 1);
                counter ++;
            }
        }
        console.log("Array sin el elemento: " + JSON.stringify(array));
        if(counter > 0){

            fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), "utf-8", function (err, data){
                console.log(data);
                if(err) console.log(err);
            })

        } 
        else {
            console.log("not in data"); 
            res.end("Not found"); 
            return;
        }

        res.end(JSON.stringify(array));
    
    });
}

module.exports.buscar_juego = function(req, res){

    const search = req.body.nombre;

    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { //callback function para que no crasheen los errores
        const array = JSON.parse(data);
        if(err) console.log(err);
        let lostNfound = [];
        for(let n = 0; n < array.length; n++){
            let nombre_juego = array[n].nombre;
            let nombre_juego_arr = nombre_juego.split(" ");
            for(let m = 0; m<nombre_juego_arr.length; m++){
                if(search == nombre_juego_arr[m]){
                    //console.log("Found!\n search: " + search + " found: " + JSON.stringify(array[n]));
                    lostNfound.push(array[n]);
                    //console.log(lostNfound);
                }
            }
            
        }
        console.log(lostNfound);
        res.end(JSON.stringify(lostNfound));


    });

}