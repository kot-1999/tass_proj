import {models} from "../models"

export async function up() {
    try {
        const { Movies } = models

        return await Movies.bulkCreate([
            {
                name: 'movie 1'
            },
            {
                name: 'movie 2'
            },
            {
                name: 'movie 3'
            },
            {
                name: 'movie 4'
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
