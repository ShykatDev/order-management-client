import { useFormik } from "formik";
import * as yup from "yup";
import GenInput from "../common/Input";
import { Button } from "../ui/button";

const validationSchema = yup.object({
    min: yup.number().min(1, "Min must more than 0").positive().required("Min is required"),
    max: yup.number().min(1, "Max must more than 0").positive().required("Max is required"),
    amount: yup.number().min(1, "Amount must more than 0").positive().required("Amount is required"),
});

const SlabForm = ({ onClose }) => {
    const formik = useFormik({
        initialValues: {
            min: 0,
            max: 0,
            amount: 0,
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
                    <GenInput label="Min Price" id="min" formik={formik}>
                        <GenInput.Default name="min" type="number" onChange={formik.handleChange} />
                    </GenInput>
                    <GenInput label="Max Price" id="max" formik={formik}>
                        <GenInput.Default name="max" type="number" onChange={formik.handleChange} />
                    </GenInput>
                    <GenInput label="Discount Amount" id="amount" formik={formik}>
                        <GenInput.Default name="amount" type="number" onChange={formik.handleChange} />
                    </GenInput>

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

export default SlabForm