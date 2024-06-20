// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, './shop.html'),
                detail: resolve(__dirname, './product-detail.html'),
                review: resolve(__dirname, './product-review.html'),
                connect: resolve(__dirname, './product-connect.html'),
                cart: resolve(__dirname, './cart.html'),
                checkout: resolve(__dirname, './checkout.html'),
                ordercomplete: resolve(__dirname, './order-complete.html')
            },
        },
    },
});