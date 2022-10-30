const extract = require('extract-zip')
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'subtitles/zip_subtitles');
const unzipDirectoryPath = path.join(__dirname, 'subtitles/unzip_subtitles');

let extractCount = 0;

async function extract_subtitles (zipName, outputFileName) {
  try {
    await extract('./subtitles/zip_subtitles/' + zipName, {
        dir: unzipDirectoryPath,
        onEntry: (entry, zipfile) => {
            entry.fileName = outputFileName;
        }
    })

    extractCount++;
    console.log('Extraction complete ' + extractCount)
  } catch (err) {
    // console.log('Extract file Error: ' + err);
    throw new Error(err);
  }
}

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    let movies_id = [];
    try{
        const jstr = fs.readFileSync("./movies/movies_id.json");
        movies_id = JSON.parse(jstr);
    } catch (err) {
        console.log(err);
        return;
    }
    const subtitles_id = files.map((file) => {
        return file.replace('.zip', '')
    })

    for(let i=0; i<subtitles_id.length; i++){
        if (!movies_id.includes(subtitles_id[i])){
            subtitles_id.splice(i, 1)
            i--;
        }
    }
    console.log("LENGTH = " + subtitles_id.length)

    let count = 0;
    subtitles_id.forEach((id) => {
        extract_subtitles(id + '.zip', id + '.srt').catch((err) => {
            console.log('Extract file Error: ' + err);
        });
    })
});