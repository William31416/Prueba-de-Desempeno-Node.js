import { Router } from "express";
import ProductController from "../controllers/productController";

export const productRouter = Router();

productRouter.get('/', ProductController.getAllProducts);
productRouter.get('/:id', ProductController.getProductById);
productRouter.get('/orders/:orderId', ProductController.getProductByOrdersId);
productRouter.post('/', ProductController.createProduct);