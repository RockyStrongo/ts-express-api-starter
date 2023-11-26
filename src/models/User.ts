import { Model, DataTypes, InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';
import Connexion from "./Connexion";
import Role from './Role';
import UserRoles from './UserRoles';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare Role: NonAttribute<Role>;
    declare addRoles?: NonAttribute<any>;
    declare createdAt: Date;
    declare updatedAt: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize: Connexion.connexionInstance,
        modelName: 'User',
        tableName: 'user',
        schema: 'users'
    }
);

Role.belongsToMany(User, {
    through: UserRoles,
    foreignKey: 'roleId',
});
User.belongsToMany(Role, {
    through: UserRoles,
    foreignKey: 'userId',
});

export default User;