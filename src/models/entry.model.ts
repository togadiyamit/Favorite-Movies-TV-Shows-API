import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';


interface EntryAttributes {
    id: number;
    title: string;
    type: 'Movie' | 'TV Show';
    director: string;
    budget: number;
    location: string;
    duration: string;
    year: number;
}


interface EntryCreationAttributes extends Optional<EntryAttributes, 'id'> { }


class Entry extends Model<EntryAttributes, EntryCreationAttributes> implements EntryAttributes {
    public id!: number;
    public title!: string;
    public type!: 'Movie' | 'TV Show';
    public director!: string;
    public budget!: number;
    public location!: string;
    public duration!: string;
    public year!: number;
}


Entry.init(
    {
        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.ENUM('Movie', 'TV Show'), allowNull: false },
        director: { type: DataTypes.STRING, allowNull: false },
        budget: { type: DataTypes.FLOAT, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        duration: { type: DataTypes.STRING, allowNull: false },
        year: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        sequelize,
        modelName: 'Entry',
        tableName: 'entries',
        timestamps: false,
    }
);


export default Entry;