import {models} from "../models"
import {movieGenres} from "./00-convertData";

export async function up() {
    try {
        const { MovieGeners } = models

        return await MovieGeners.bulkCreate(movieGenres)
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }
}

export function down() {
    throw new Error('Not implemented fuction')
}
