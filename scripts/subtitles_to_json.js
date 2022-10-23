const path = require('path');
const fs = require('fs');
const parseSrt = require('parse-srt');

const directoryPath = path.join(__dirname, 'subtitles/unzip_subtitles');

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    const subtitles_id = files.map((file) => {
        return file.replace('.srt', '')
    })
    console.log("LENGTH = " + subtitles_id.length)

    let count_succ = 0;
    let count_err = 0;
    subtitles_id.forEach((id) => {
        const buffer = fs.readFileSync('./subtitles/unzip_subtitles/' + id + '.srt');
        const fileContent = buffer.toString();
        // console.log(fileContent)

        let jsonSubs;
        try{
            console.log('Before: ' + id)
            jsonSubs = parseSrt(fileContent);
            console.log('After: ' + id)
        } catch(err) {
            console.log('ParseError: ' + err)
            count_err++;
            return;
        }
        // console.log(jsonSubs);

        fs.writeFile('./subtitles/json_subtitles/' + id + '.json', JSON.stringify(jsonSubs), err => {
            if (err) {
                console.log('Error writing jsonSubs', err)
            } else {
                count_succ++;
                console.log('Successfully wrote jsonSubs. S: ' + count_succ + '\t' + 'E: ' + count_err)
            }
        });
    })
});