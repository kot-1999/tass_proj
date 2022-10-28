import fs from 'fs'
import {isNumber, isString} from "lodash";
import {LANGUAGE, ROLE} from "../../utils/enums";
const moviesData = JSON.parse(fs.readFileSync('./scripts/movies/all_movies.json', { encoding: 'utf-8'}))
const subtitlesData = JSON.parse(fs.readFileSync('./scripts/subtitles/all_subtitles.json', { encoding: 'utf-8'}))

const genres: Array<any> = []
const movieGenres: Array<any> = []
const subtitles: Array<any> = []
const persons: Array<any> = []
const roles: Array<ROLE> = []
const moviesPersons: Array<any> = []

const movies = moviesData.map((movie: any, movieIndex: number) => {

    // Create persons and roles arrays
    const tmpActors = isString(movie?.actors) ? [movie?.actors] : movie?.actors
    const tmpWriters= isString(movie?.writer) ? [movie?.writer] : movie?.writer
    const tmpDirector= isString(movie?.director) ? [movie?.director] : movie?.director

    tmpActors.forEach((actor: string) => {
        if (actor.charAt(0) === ' ') {
            actor = actor.substring(1, actor.length)
        }
        let personIndex: number = persons.indexOf(actor)
        if (personIndex === -1 || roles[personIndex] !== ROLE.ACTOR) {
            persons.push(actor)
            personIndex = persons.length - 1
            roles.push(ROLE.ACTOR)
        }
        moviesPersons.push({
            movieID: movieIndex + 1,
            personID: personIndex + 1,
        })
    })

    tmpWriters.forEach((writer: string) => {
        if (writer.charAt(0) === ' ') {
            writer = writer.substring(1, writer.length)
        }
        let personIndex: number = persons.indexOf(writer)
        if (personIndex === -1 || roles[personIndex] !== ROLE.SCENARIST) {
            persons.push(writer)
            personIndex = persons.length - 1
            roles.push(ROLE.SCENARIST)
        }
        moviesPersons.push({
            movieID: movieIndex + 1,
            personID: personIndex + 1

        })
    })

    tmpDirector.forEach((director: string) => {
        if (director.charAt(0) === ' ') {
            director = director.substring(1, director.length)
        }
        let personIndex: number = persons.indexOf(director)
        if (personIndex === -1 || roles[personIndex] !== ROLE.DIRECTOR) {
            persons.push(director)
            personIndex = persons.length - 1
            roles.push(ROLE.DIRECTOR)
        }
        moviesPersons.push({
            movieID: movieIndex + 1,
            personID: personIndex + 1

        })
    })


    // Create subtitles array
    subtitlesData.filter((subtitle: any) =>
            subtitle.movieID === movie.imdb_title_id)
        .map((subtitle: any, i: number) => subtitles.push({
            id: i + 1,
            movieID: movieIndex + 1,
            language: LANGUAGE.ITALIAN,
            text: subtitle.text,
            startTime: isNumber(subtitle.start) ? subtitle.start : 0 ,
            endTime: isNumber(subtitle.end) ? subtitle.end : 0,
        }))

    // Add new genres to genres array also generate indexes for movieGenres

    const tmpGenres = isString(movie?.genre) ? [movie?.genre] : movie?.genre

    tmpGenres.forEach((g: string) => {
        let genreIndex: number = genres.indexOf(g.trim())
        if (genreIndex === -1) {
            genres.push(g.trim())
            genreIndex = genres.length - 1
        }
        movieGenres.push({
            genreID: genreIndex + 1,
            movieID: movieIndex + 1
        })
    })

    return {
        name: movie.title,
        description: movie.description.toString(),
        votes: Number(movie.votes) || null,
        rating: Number(movie.avg_vote) || null,
        budget: Number(movie?.budget?.substring(2, movie.budget.length)) || null,
        duration: Number(movie.duration) || null,
        worldWideIncome: Number(movie?.worldWideIncome?.substring(2, movie.worldWideIncome.length)) || null,
        reviewsFromUsers: Number(movie.reviews_from_users) || null,
        reviewsFromCritics: Number(movie.reviews_from_critics) || null,
        published: movie.date_published,
        created: movie.year
    }
})

export { movies, subtitles, genres, movieGenres, persons, moviesPersons, roles }

export async function up() {
    return await Promise.resolve()
}