import {models} from "../models"
import {LANGUAGE, ROLE} from "../../utils/enums";

export async function up() {
    try {
        const { Roles } = models

        return await Roles.bulkCreate([
            {
                role: ROLE.ACTOR
            },
            {
                role: ROLE.SCENARIST
            },
            {
                role: ROLE.DIRECTOR
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
