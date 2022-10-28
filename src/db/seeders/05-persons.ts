import {models} from "../models"
import {persons, roles} from "./00-convertData";

export async function up() {
    try {
        const { Persons } = models

        return await Persons.bulkCreate(persons.map((person, index) => ({ primaryName: person, role: roles[index] })))
    } catch (err) {
        console.log(err)
        return Promise.reject(err)
    }
}

export function down() {
    throw new Error('Not implemented fuction')
}
