// import { Sequelize } from "sequelize-typescript";

// const sequelize: Sequelize = new Sequelize ({
//     dialect: 'mysql',
//     host: '127.0.0.1',
//     username: 'root',
//     password: '',
//     database: 'E_comFast',
//     models: [],
// });

// export default sequelize;

import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/productCart';
import { Order } from '../models/order';
import { Entity } from '../models/entity';
import { Permission } from '../models/permission';

const sequelize = new Sequelize({
    database: 'E_comFast',
    dialect: 'mysql',
    username: 'root',
    password: '',
    models: [User, Role, Product, Cart, ProductCart, Order, Entity, Permission],
});

export default sequelize;