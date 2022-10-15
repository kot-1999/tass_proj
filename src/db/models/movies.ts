import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'

export class MoviesModel extends DatabaseModel {
    id: number
    name: string
}

export default (sequelize: Sequelize) => {
    MoviesModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }

        },
        {
            sequelize,
            timestamps: false,
            modelName: 'movies',
            paranoid: false
        }
    )
    ;MoviesModel.associate = (models: Models) => {

    }
    return MoviesModel
}
