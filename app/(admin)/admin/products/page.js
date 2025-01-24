"use client";

import { columns } from "@/components/columns/ProductsTableColumns";
import DataTable from "@/components/common/DataTable";
import ProductForm from "@/components/forms/ProductForm";
import { Button } from "@/components/ui/button";
import API from "@/config/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";


const AdminProducts = () => {
  const [productModal, setProductModal] = useState(false);

  const handleClose = () => {
    setProductModal(false);
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: API.product.getProducts,
    placeholderData: keepPreviousData,
  });

  console.log(products);
  if (isLoading) {
    return "loading";
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-xl">Products</h1>
        <Button onClick={() => setProductModal(!productModal)}>
          <PlusCircleIcon size={18} /> Add Product
        </Button>
      </div>

      <div className="flex gap-6 items-start">
        <div className={`${productModal ? "w-3/5" : "w-full"}`}>
          <DataTable columns={columns} data={products} />
        </div>

        {/* Product Add Form */}
        {productModal && (
          <div className="w-2/5 border p-4 rounded-md">
            <h1>Product Add Form</h1>
            <ProductForm onClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
