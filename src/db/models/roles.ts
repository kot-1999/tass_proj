import { Sequelize, DataTypes } from 'sequelize'
import { DatabaseModel } from '../../types/models'
import { Models } from './index'
import {ROLE} from "../../utils/enums";

export class RoleModel extends DatabaseModel {
    id: number

    role: ROLE
}

export default (sequelize: Sequelize) => {
    RoleModel.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true
            },
            role: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'roles',
            paranoid: false
        }
    )
    ;RoleModel.associate = (models: Models) => {
        RoleModel.belongsToMany(models.Movies, {
            foreignKey: {
                name: 'roleID',
                allowNull: false
            },
            through: {
                model: models.TeamMates,
                unique: false
            },
            constraints: false
        })
    }
    return RoleModel
}
