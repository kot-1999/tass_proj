import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'
import {ROLE} from "../../utils/enums";

export class TeamMatesModel extends DatabaseModel {
    movieID: number
    personID: number
}

export default (sequelize: Sequelize) => {
    TeamMatesModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            movieID: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: false,
                primaryKey: true,
            },
            personID: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: false,
                primaryKey: true,
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'moviesPersons',
            paranoid: false
        }
    )
    ;TeamMatesModel.associate = (models: Models) => {

    }
    return TeamMatesModel
}
