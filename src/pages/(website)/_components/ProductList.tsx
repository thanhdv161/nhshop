import React from "react";
import ProductItem from "./ProductItem";
import { IProduct } from "@/common/types/product";

type Props = {
    products: IProduct[];
};

const ProductList = ({ products }: Props) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
                {products.map((product: IProduct) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;