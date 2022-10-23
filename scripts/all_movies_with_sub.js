const fs = require('fs');

const data = fs.readFileSync('./movies/movies_id.json', {encoding:'utf8', flag:'r'});
let moviesID = JSON.parse(data);

let subtitlesID = fs.readdirSync('./subtitles/json_subtitles');
subtitlesID = subtitlesID.map(file => {
    return file.replace('.json', '')
})

for(let i=0; i<moviesID.length; i++){
    if(!subtitlesID.includes(moviesID[i])){
        moviesID.splice(i, 1)
        i--;
    }
}
console.log("LENGTH = " + moviesID.length)

fs.readFile("./movies/IMDb_movies.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
      let movies = JSON.parse(jsonString);
      // console.log("Movies id is:", movies[0].imdb_title_id);

      movies = movies.filter(movie => {
        return moviesID.includes(movie.imdb_title_id);
      })
      console.log(movies);

      const JsonString = JSON.stringify(movies);
      // console.log(idJsonString);

      fs.writeFile('./movies/all_movies.json', JsonString, err => {
          if (err) {
              console.log('Error writing file', err)
          } else {
              console.log('Successfully wrote file')
          }
      });
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
