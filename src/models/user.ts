import { 
    Model, 
    Column, 
    Table, 
    ForeignKey, 
    BelongsTo, 
    PrimaryKey, 
    AutoIncrement, 
    DataType 
} from 'sequelize-typescript';
import { Role } from './Role';

@Table
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column ({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column ({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;

    @ForeignKey(() => Role)
    @Column ({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;

    @BelongsTo(() => Role)
    role!: Role;
}
