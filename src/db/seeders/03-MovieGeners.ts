import {models} from "../models"

export async function up() {
    try {
        const { MovieGeners } = models

        return await MovieGeners.bulkCreate([
            {
                genreID: 1,
                movieID: 1
            },
            {
                genreID: 2,
                movieID: 1
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
