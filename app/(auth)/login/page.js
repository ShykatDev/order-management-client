"use client";

import GenInput from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should min 6 character long")
    .required("Password is required"),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
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
          <h1 className="text-3xl">Welcome Back!</h1>
          <p className="text-gray-400 mt-2">
            {`Don't have any account?`}{" "}
            <Link href={"/register"} className="underline text-black">
              Create a new account now.
            </Link>
            <span>{` It's FREE! Takes less than one minute.`}</span>
          </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <GenInput label="Email" id="email" formik={formik}>
            <GenInput.Default name="email" type="email" onChange={formik.handleChange} />
          </GenInput>
          <GenInput label="Password" id="password" formik={formik}>
            <GenInput.PassInput name="password" onChange={formik.handleChange} />
          </GenInput>

          <Button type="submit" size={"lg"} className={"w-full"}>
            Login Now
          </Button>
        </form>

        <p className="text-gray-400 mt-4 text-center">
          Login as Admin?{" "}
          <Link href={"/admin-login"} className="underline text-black">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
