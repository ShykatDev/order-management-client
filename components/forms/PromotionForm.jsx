'use client'

import { useFormik } from "formik";
import Select from 'react-select';
import * as yup from "yup";
import { DatePicker } from "../common/DatePicker";
import GenInput from "../common/Input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    start_date: yup.date().optional(),
    end_date: yup.date().required("End date is required"),
    products: yup.array().required("Products are required"),
    promotion_type_id: yup.number().required("Promotion type is required"),
    discount_amount: yup.number().required("Discount amount is required"),
});

const PromotionForm = ({ onClose }) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            start_date: new Date(),
            end_date: "",
            products: [],
            promotion_type_id: null,
            discount_amount: null,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });


    return (
        <div className="h-full mx-auto flex justify-center items-center">
            <div className="w-full">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <GenInput label="Promotion Title" id="title" formik={formik}>
                        <GenInput.Default name="title" type="text" onChange={formik.handleChange} />
                    </GenInput>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <Label>Start Date</Label>
                            <DatePicker name="start_date" onChange={(e) => formik.setFieldValue("start_date", e)} />
                        </div>
                        <div className="">
                            <Label>End Date <span className="text-red-500">*</span></Label>
                            <DatePicker name="end_date" onChange={(e) => formik.setFieldValue("end_date", e)} />
                            {formik.touched.end_date && formik.errors.end_date && <p className='text-red-500 text-sm mt-1'>{formik.errors.end_date}</p>}
                        </div>
                    </div>
                    <div>
                        <Label>Products <span className="text-red-500">*</span></Label>
                        <Select name="products" options={options} isClearable isMulti />
                        {formik.touched.products && formik.errors.products && <p className='text-red-500 text-sm mt-1'>{formik.errors.products}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <Label>Promotion Type <span className="text-red-500">*</span></Label>
                            <Select name="promotion_type_id" options={options} isClearable />
                            {formik.touched.promotion_type_id && formik.errors.promotion_type_id && <p className='text-red-500 text-sm mt-1'>{formik.errors.promotion_type_id}</p>}
                        </div>
                        <GenInput label="Discount Amount" id="discount_amount" formik={formik}>
                            <GenInput.Default name="discount_amount" type="number" onChange={formik.handleChange} />
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

export default PromotionForm