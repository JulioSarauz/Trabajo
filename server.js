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

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);

const getInfo = async() => {
    //Quito
    let clim = await clima.getClima(-0.19, -78.5);
    let cl = await clima.getcl();
    return cl;
}

const getInfo2 = async() => {
    //Guayaquil
    var clim = await clima.getClima(-2.1961601, -79.8862076);
    let cl = await clima.getcl();
    return cl;
}

const getInfo3 = async() => {
    //Madrid
    var clim = await clima.getClima(-3.7025600, 40.4165000);
    let cl = await clima.getcl();
    return cl;
}
const getInfo4 = async() => {
    //Paris
    var clim = await clima.getClima(2.3486000, 48.8534000);
    let cl = await clima.getcl();
    return cl;
}

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "juLiO Saráuz",
        temperatura: getInfo(),
        temperatura2: getInfo2()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        temperatura: getInfo3(),
        temperatura2: getInfo4()
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});