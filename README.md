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
    $ num run seed