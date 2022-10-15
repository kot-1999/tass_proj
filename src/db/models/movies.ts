import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'

export class MoviesModel extends DatabaseModel {
    id: number
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
