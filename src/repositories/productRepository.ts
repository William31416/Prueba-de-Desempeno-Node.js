import { injectable } from "tsyringe";
import { Product } from "../models/product";
import { CreationAttributes } from "sequelize";

@injectable()
export default class ProductReposity {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async findByOrderId(orderId: number) {
        return await Product.findAll({ where: {orderId}});
    }

    async create(product: CreationAttributes<Product>){
        return await Product.create(product);
    }
}