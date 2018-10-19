// const Resort = require('../models/resort')
const rp = require('request-promise')
const $ = require('cheerio')

const url1 = 'https://en.wikipedia.org/wiki/List_of_Colorado_ski_resorts'

rp(url1)
  .then(function(html){
    //success!
    console.log($('li > a', html).length);
    console.log($('li > a', html));
  })
  .catch(function(err){

  });
