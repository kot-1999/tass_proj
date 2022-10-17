import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'

export class PersonModel extends DatabaseModel {
    id: number

    primaryName: string
    birthYear: Date
    deathYear: Date
}

export default (sequelize: Sequelize) => {
    PersonModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            primaryName: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            birthYear: {
                type: DataTypes.DATE,
                allowNull: true
            },
            deathYear: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'persons',
            paranoid: false
        }
    )
    ;PersonModel.associate = (models: Models) => {
        PersonModel.belongsToMany(models.Movies, {
            foreignKey: {
                name: 'personID',
                allowNull: false
            },
            through: {
                model: models.TeamMates,
                unique: false
            },
            constraints: false
        })
    }
    return PersonModel
}
