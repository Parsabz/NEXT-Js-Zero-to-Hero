//tutorial > https://www.youtube.com/watch?v=PgZ9npYJZzU
//Promise -- npm install axios

const axios = require("axios");
const data = axios.get ("https://cat-fact.herokuapp.com/facts");
data
    .then ((res) => {
console.log (res);
    })
    .catch((err) => { 
        console.log(err); 
    });
console.log(data);
