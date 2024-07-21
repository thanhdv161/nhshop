import { Router } from "express";
import { addProduct, editProduct, getAllProducts, getProductById, removeProduct } from "../controllers/product";

const router = Router();

router.get(`/products`, getAllProducts);
router.get(`/products/:id`, getProductById);
router.post(`/products`, addProduct);
router.put(`/products/:id`, editProduct);
router.delete(`/products/:id`, removeProduct);
export default router;
