import {models} from "../models"
import { LANGUAGE } from "../../utils/enums";

export async function up() {
    try {
        const { Subtitles } = models

        return await Subtitles.bulkCreate([
            {
                id: 1,
                movieID: 1,
                language: LANGUAGE.ITALIAN,
                text: 'string',
                startTime: 3,
                endTime: 56,
            },
            {
                id: 2,
                movieID: 1,
                language: LANGUAGE.ITALIAN,
                text: 'string',
                startTime: 3,
                endTime: 56,
            },
            {
                id: 3,
                movieID: 1,
                language: LANGUAGE.ITALIAN,
                text: 'string',
                startTime: 3,
                endTime: 56,
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
