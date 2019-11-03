const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://news.ycombinator.com/';

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });
