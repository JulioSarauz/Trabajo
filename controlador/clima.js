const axios = require('axios');
let cl;
const setcl = (cl2) => {
    cl = cl2;
}
const getcl = () => {
    return cl;
}
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e006f7a235a86a658d902e7275fc83cf&units=metric`);
    const clima = resp.data.main.temp;
    setcl(clima);
    return clima
}

module.exports = {
    getClima,
    getcl
}