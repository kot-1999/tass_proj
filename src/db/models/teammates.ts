import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'

export class TeamMatesModel extends DatabaseModel {
    movieID: number
    roleID: number
    personID: number
}

export default (sequelize: Sequelize) => {
    TeamMatesModel.init(
        {
            movieID: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            roleID: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            personID: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'teamMates',
            paranoid: false
        }
    )
    ;TeamMatesModel.associate = (models: Models) => {

    }
    return TeamMatesModel
}
