import {models} from "../models"

export async function up() {
    try {
        const { Movies } = models

        return await Movies.bulkCreate([
            {
                name: 'Marvael',
                description: 'string',
                votes: 123,
                rating: 5.12,
                budget: 1235.56,
                duration: 1245.5,
                worldWideIncome: 123.56,
                reviewsFromUsers: 12,
                reviewsFromCritics: 12,

                published: '1967',
                created: '1906-12-26',
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
