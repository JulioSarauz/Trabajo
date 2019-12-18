const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    //Objeto javascript
    let salida = {
            nombre: "Julio",
            edad: 21,
            url: req.url
        }
        //convertir el objeto en un archivo json
    res.write(JSON.stringify(salida));
    //res.write("Hola mundo desde node js");
    res.end();
}).listen(8085);

console.log("Escuchando en el puerto: 8085");