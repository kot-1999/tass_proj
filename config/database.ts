import 'dotenv/config'
import { Options } from 'sequelize'

export const development = {
    url: process.env.POSTGRESQL_URL,
    options: <Options> {
        minifyAliases: true,
        logging: false,
        pool: {
            max: 4
        }
    },
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeMetaSeeders'
}