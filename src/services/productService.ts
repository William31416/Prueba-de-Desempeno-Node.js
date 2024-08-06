import ProductRepository from "../repositories/productRepository";
import { CreationAttributes } from "sequelize";
import { injectable, inject } from "tsyringe";
import { Product } from "../models/product";

@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async getProductByOrders(ordersId: number) {
        return await this.productRepository.findByOrdersId(ordersId);
    }

    async createProduct(product: CreationAttributes<Product>){
        return await this.productRepository.create(product);
    }

    async uptadeProduct(id: number) {
        return await this.productRepository.uptadeProduct(id);
    }
}