"use client";

import { columns } from "@/components/columns/ProductsTableColumns";
import DataTable from "@/components/common/DataTable";
import ProductForm from "@/components/forms/ProductForm";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

const data = [
  {
    sl: "1",
    name: "Product 1",
    description: "Product 1 description",
    weight: "1000g",
    price: 100,
    enabled: true,
    promotion: [],
  },
  {
    sl: "2",
    name: "Product 2",
    description: "Product 2 description",
    weight: "2000g",
    price: 520,
    enabled: false,
    promotion: ["fixed", "percentage"],
  },
];

const AdminProducts = () => {
  const [productModal, setProductModal] = useState(false);

  const handleClose = () => {
    setProductModal(false);
  };

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
          <DataTable columns={columns} data={data} />
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
