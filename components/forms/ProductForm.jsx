'use client'

import API from "@/config/api";
import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import GenInput from "../common/Input";
import { Button } from "../ui/button";

const validationSchema = yup.object({
    name: yup.string().required("Product name is required"),
    price: yup.number().min(1, "Price must more than 0").positive().required("Price is required"),
    weight: yup.number().min(1, "Weight must more than 0").positive().required("Weight is required"),
    description: yup.string().required("Description is required"),
});

const ProductForm = ({ onClose }) => {
    const queryClient = useQueryClient()

    queryClient.invalidateQueries({ queryKey: ['todos'] })
    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            weight: 0,
            description: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            const promise = API.product.postProduct(values).then(() => queryClient.invalidateQueries({
                queryKey: ['products'],
            }));

            toast.promise(promise, {
                loading: "Adding Product...",
                success: "Saved",
                error: "Error"
            })
        },
    });
    return (
        <div className="h-full mx-auto flex justify-center items-center">
            <div className="w-full">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <GenInput label="Product Name" id="name" formik={formik}>
                        <GenInput.Default name="name" type="text" onChange={formik.handleChange} />
                    </GenInput>
                    <GenInput label="Product Description" id="description" formik={formik}>
                        <GenInput.TextAreaInp name="description" onChange={formik.handleChange} />
                    </GenInput>
                    <div className="grid grid-cols-2 gap-4">
                        <GenInput label="Product Price" id="price" formik={formik}>
                            <GenInput.Default name="price" type="number" onChange={formik.handleChange} />
                        </GenInput>
                        <GenInput label="Product Weight(gm)" id="weight" formik={formik}>
                            <GenInput.Default name="weight" type="number" onChange={formik.handleChange} />
                        </GenInput>
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        <Button variant="destructive" type="button" size={"sm"} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" size={"sm"} >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm