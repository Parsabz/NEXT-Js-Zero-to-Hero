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


//or you can use Async/Await
const axios = require("axios");
const fetchData = async () => {
const data = await axios.get("https://cat-fact.herokuapp.com/facts")
console. log (data);
}
fetchData();

          //use try/catch for errors when using Async/Await
const axios = require("axios");
const fetchData = async () => {
    try {
const data = await axios.get("https://cat-fact.herokuapp.com/fact1s")
console. log (data);
} catch (err) {
    console. log (err);
    } 
};
fetchData();
