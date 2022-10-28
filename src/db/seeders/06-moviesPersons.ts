import {models} from "../models"
import {moviesPersons} from "./00-convertData";

export async function up() {
    try {
        const { MoviesPersons } = models

        return await MoviesPersons.bulkCreate(moviesPersons)
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }
}

export function down() {
    throw new Error('Not implemented fuction')
}
