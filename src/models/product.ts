import { 
    Table, 
    Column, 
    Model, 
    DataType 
} from 'sequelize-typescript';

@Table
export class Product extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    price!: number;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    stock!: number;
}