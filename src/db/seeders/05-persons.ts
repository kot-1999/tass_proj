import {models} from "../models"
import {persons} from "./00-convertData";

export async function up() {
    try {
        const { Persons } = models

        return await Persons.bulkCreate(persons)
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }
}

export function down() {
    throw new Error('Not implemented fuction')
}
