import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import Connexion from "./Connexion";

class Plant extends Model<InferAttributes<Plant>, InferCreationAttributes<Plant>> {
    declare id?: number;
    declare name: String;
}

Plant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize: Connexion.connexionInstance,
        modelName: 'Plant',
        tableName: 'plant',
        schema: 'plants'
    }
);


export default Plant;