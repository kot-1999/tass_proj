import {models} from "../models"
import {GENRE} from "../../utils/enums";

export async function up() {
    try {
        const { Genres } = models

        return await Genres.bulkCreate([
            {
                name: GENRE.DRAMA
            },
            {
                name: GENRE.HORROR
            }
        ])
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }
}

export function down() {
    throw new Error('Not implemented fuction')
}
