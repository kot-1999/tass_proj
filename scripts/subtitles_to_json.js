const extract = require('extract-zip')
const path = require('path');
const fs = require('fs');
const parseSrt = require('parse-srt');

const directoryPath = path.join(__dirname, 'subtitles/zip_subtitles');
const unzipDirectoryPath = path.join(__dirname, 'subtitles/unzip_subtitles');

async function extract_subtitles (zipName, outputFileName) {
  try {
    await extract('./subtitles/zip_subtitles/' + zipName, {
        dir: unzipDirectoryPath,
        onEntry: (entry, zipfile) => {
            // console.log(entry)
            entry.fileName = outputFileName;
        }
    })
    console.log('Extraction complete')
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
        const index = movies_id[i].indexOf(subtitles_id[i])
        if(index == -1){
            subtitles_id.splice(i, 1)
        }
    }

    subtitles_id.forEach((id) => {
        extract_subtitles(id + '.zip', id + '.srt').then(() => {
            console.log('complete ' + id)
            const buffer = fs.readFileSync('./subtitles/unzip_subtitles/' + id + '.srt');
            const fileContent = buffer.toString();
            // console.log(fileContent)

            let jsonSubs = parseSrt(fileContent);
            // console.log(jsonSubs);

            fs.writeFile('./subtitles/json_subtitles/' + id + '.json', JSON.stringify(jsonSubs), err => {
                if (err) {
                    console.log('Error writing jsonSubs', err)
                } else {
                    console.log('Successfully wrote jsonSubs')
                }
            });
        }).catch((err) => {
            console.log('Extract file Error: ' + err);
        });
    })
});