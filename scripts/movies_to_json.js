let csvToJson = require('convert-csv-to-json');

let fileInputName = './movies/IMDb_movies.csv';
let fileOutputName = './movies/IMDb_movies.json';

csvToJson.parseSubArray('"', ',').generateJsonFileFromCsv(fileInputName,fileOutputName);