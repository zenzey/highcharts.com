
// Highcharts requires jQuery
if (!window.jQuery) {
  window.jQuery = require('jquery');
}

require("./js/highstock.src.js");

module.exports = window.Highcharts;
