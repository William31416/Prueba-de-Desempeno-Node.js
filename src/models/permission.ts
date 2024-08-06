import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
} from 'sequelize-typescript';
import { Role } from "./role"
import { Entity } from "./entities"


@Table({
    tableName: "Permissions",
    timestamps: true,
})

export class Admin extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
    })
    canGet!: boolean;

    @HasMany(() => Role)
    role!: Role[];

    @HasMany(() => Entity)
    entities!: Entity
}