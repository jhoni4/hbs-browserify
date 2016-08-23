"use strict";

var Handlebars = require("hbsfy/runtime");
var entryTemplate = require('../templates/article/article.hbs');
var entryData = require('../templates/article/article-data.js');

// Register a partial
Handlebars.registerPartial("tagLine", require('../templates/partials/tagline.hbs'));

// Create a custome helper that we can call inside an expression in
// our markup
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

var solarTemplate = require('../templates/article/article2.hbs');
var entryData = require('../templates/article/article2-data.js');


$("#button").click(function(){
  $("#entryOutput2").append(solarTemplate(entryData));
});



















