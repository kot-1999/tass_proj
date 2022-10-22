const fs = require("fs");

fs.readFile("./movies/IMDb_movies.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const movies = JSON.parse(jsonString);
    // console.log("Movies id is:", movies[0].imdb_title_id);

    const movies_id = movies.map((movie) => {return movie.imdb_title_id});
    // console.log(movies_id);

    const idJsonString = JSON.stringify(movies_id);
    // console.log(idJsonString);

    fs.writeFile('./movies/movies_id.json', idJsonString, err => {
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