//Mostrar web
//introduccion express
//plantillas
const axios = require('axios');
const clima = require('./controlador/clima')
var express = require('express');
var app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
//llamado a helpers
require('./hbs/helpers')
let tmp = 0;
let tmp1 = 0;
let tmp2 = 0;
let tmp3 = 0;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);

const getInfo = async() => {
    //Quito

    let clim = await clima.getClima(-0.19, -78.5).then(function(dato) {
        tmp = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}

const getInfo2 = async() => {
    //Guayaquil
    var clim = await clima.getClima(-2.1961601, -79.8862076).then(function(dato) {
        tmp1 = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}

const getInfo3 = async() => {
    //Madrid
    var clim = await clima.getClima(-3.7025600, 40.4165000).then(function(dato) {
        tmp2 = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}
const getInfo4 = async() => {
    //Paris
    var clim = await clima.getClima(2.3486000, 48.8534000).then(function(dato) {
        tmp3 = dato;
        return dato;
    });
    let cl = await clima.getcl();
    console.log(tmp);
    return tmp;
}

getInfo();
getInfo2();
getInfo3();
getInfo4();
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "juLiO Saráuz",
        temperatura: tmp,
        temperatura2: tmp1
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        temperatura: tmp2,
        temperatura2: tmp3
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});