const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'subtitles/json_subtitles');

// console.log(directoryPath)
let filenames = fs.readdirSync(directoryPath);
// console.log(filenames)

let allSubtitles = [];
filenames.forEach((file) => {
    const data = fs.readFileSync('./subtitles/json_subtitles/' + file, {encoding:'utf8', flag:'r'});
    const subtitles = JSON.parse(data);
    subtitles.forEach((subtitle) => {
        subtitle.movieID = file.replace('.json', '');
    });
    allSubtitles = [...allSubtitles, ...subtitles];
});

// console.log(allSubtitles);

fs.writeFile('./subtitles/' + 'all_subtitles.json', JSON.stringify(allSubtitles), err => {
    if (err) {
        console.log('Error writing all_subtitles.json', err)
    } else {
        console.log('Successfully wrote all_subtitles.json')
    }
});