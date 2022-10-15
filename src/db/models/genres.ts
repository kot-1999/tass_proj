import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'
import {GENRE} from "../../utils/enums";

export class GenersModel extends DatabaseModel {
    id: number
    genre: GENRE
}

export default (sequelize: Sequelize) => {
    GenersModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'genres',
            paranoid: false
        }
    )
    ;GenersModel.associate = (models: Models) => {

    }
    return GenersModel
}
