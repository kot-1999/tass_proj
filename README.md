# tass_proj 
### To init project:
    $ npm install
### To start postgres database:
###### IMPORTANT: Docker and docker compose must be installed
    $ docker-compose up
### To run the project:
    $ npm run debug
### To run seeders:
###### IMPORTANT: Seeders script can be run only once. To run it numerous times, auto-generating table SequelizeMetaSeeders must be deleted. Anyway deleting all tables folder from db is recommended
    $ npm run seed

## Preparing Data
### Prepare movies
1. Create a dir
    $ cd scripts
    $ mkdir movies
2. Download [csv file](https://drive.google.com/file/d/1A9iaJTR0Dh4Iu-0KNdmAjP8l4MV9Z9Nd/view?usp=sharing) with all movies
3. Copy this file to **movies** folder
### Prepare subtitles
1. Create a main subtitles dir
    $ cd scripts
    $ mkdir subtitles
2. Move to **subtitles** folder and create several dirs
    $ cd subtitles
    $ mkdir json_subtitles, unzip_subtitles, zip_subtitles
3. Move to **zip_subtitles** folder
    $ cd zip_subtitles
4. Extract [zip file](https://drive.google.com/file/d/1qPJ_tBzpwzqRlo7da8-ZUFGAfToiNMTN/view?usp=sharing) to this folder
### Run all scripts to generate all_subtitles.json and all_movies.json
    $ node movies_to_json.js && node generate_id_array.js && node extract_subtitles.js && node subtitles_to_json.js && node all_subtitles_json.js && node all_movies_with_sub.js
