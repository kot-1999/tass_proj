import {models} from "../models"
import {LANGUAGE, ROLE} from "../../utils/enums";

export async function up() {
    try {
        const { Persons } = models

        return await Persons.bulkCreate([
            {
                primaryName: 'Dima',
                birthYear: '1956',
                deathYear: '2022'
            },
            {
                primaryName: 'Sasha',
                birthYear: '1999',
                deathYear: null
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
