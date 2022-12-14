import { forEach } from 'lodash'
import { Sequelize } from 'sequelize'
import * as database from '../../../config/database'
import pg from 'pg'
import 'colors'

// Import define function from database models
import defineMovies from './movies'
import defineMoviesPersons from './moviesPersons'
import defineMovieGenres from './movieGeners'
import defineGenres from './genres'
import defineSubtitles from './subtitles'
import definePersons from './persons'


// Set true because otherwise BIGINT return string instead of integer https://github.com/sequelize/sequelize/issues/1774
pg.defaults.parseInt8 = true

// use development db by default
const { url, options: dbOptions } = database.development


const sequelize = new Sequelize(url, dbOptions)

sequelize
    .authenticate()
    .then(() => console.log('Database connection has been established successfully.'.green))
    .catch((e: any) => console.error(`Unable to connect to the database${e}.`.red))

const models = {
    Movies: defineMovies(sequelize),
    MoviesPersons: defineMoviesPersons(sequelize),
    MovieGeners: defineMovieGenres(sequelize),
    Genres: defineGenres(sequelize),
    Subtitles: defineSubtitles(sequelize),
    Persons: definePersons(sequelize),
}

forEach(models, (value) => {
    if (typeof value.associate === 'function') {
        value.associate(models)
    }
})
type Models = typeof models

export type { Models }
export { sequelize, models }
export default sequelize