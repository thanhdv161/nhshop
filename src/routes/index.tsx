import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import AddProduct from "@/pages/(dashboard)/products/_components/add/AddProduct";
import EditProduct from "@/pages/(dashboard)/products/_components/edit/EditProduct";
import ProductsManagementPage from "@/pages/(dashboard)/products/page";
import NotFoundPage from "@/pages/(website)/404/page";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ShopPage from "@/pages/(website)/shop/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                </Route>
                <Route path="admin" element={<LayoutAdmin />}>
                <Route index element={<DashboardPage />} />
                    <Route path="products" element={<ProductsManagementPage />} />
                    <Route path="products/add" element={<AddProduct />} />
                    <Route path="products/:id/edit" element={<EditProduct />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Router;
