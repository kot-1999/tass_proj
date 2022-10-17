import {models} from "../models"
import {LANGUAGE, ROLE} from "../../utils/enums";

export async function up() {
    try {
        const { TeamMates } = models

        return await TeamMates.bulkCreate([
            {
                movieID: 1,
                roleID: 1,
                personID: 1
            },
            {
                movieID: 1,
                roleID: 2,
                personID: 1
            },
            {
                movieID: 1,
                roleID: 2,
                personID: 2
            },
            {
                movieID: 1,
                roleID: 3,
                personID: 2
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
