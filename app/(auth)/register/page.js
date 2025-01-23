"use client";

import GenInput from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should min 6 character long")
    .required("Password is required"),
});

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="max-w-xl h-full mx-auto flex justify-center items-center">
      <div className="w-full h-auto px-6 ">
        {/* <h1 className="text-3xl font-semibold mb-20">App Login</h1> */}
        <div className="mb-10">
          <h1 className="text-3xl">Welcome!</h1>
          <p className="text-gray-400 mt-2">
            {`Already have an account?`}{" "}
            <Link href={"/login"} className="underline text-black">
              Login to your account.
            </Link>
            <span>{` It's FREE! Takes less than one minute.`}</span>
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
        <GenInput label="Full Name" id="name" formik={formik}>
            <GenInput.Default
              name="name"
              type="name"
              onChange={formik.handleChange}
            />
          </GenInput>
          <GenInput label="Email" id="email" formik={formik}>
            <GenInput.Default
              name="email"
              type="email"
              onChange={formik.handleChange}
            />
          </GenInput>
          <GenInput label="Password" id="password" formik={formik}>
            <GenInput.PassInput
              name="password"
              onChange={formik.handleChange}
            />
          </GenInput>

          <Button type="submit" size={"lg"} className={"w-full"}>
            Register Now
          </Button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Register as Admin?{" "}
          <Link href={"/admin-register"} className="underline text-black">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
