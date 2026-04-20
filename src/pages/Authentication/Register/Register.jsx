import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // ✅ get navigate hook
    const { registerUser } = useAuth();

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        // 👉 Call your registration API here
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })
    };

    const password = watch("password");

    return (
        <div className="flex w-full items-center justify-center px-2 py-4 sm:px-4">
            <div className="card w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="px-6 pt-6">
                    <h1 className="text-3xl mb-1 font-bold text-slate-900">Create an Account</h1>
                    <p className="text-slate-600">Register to start using QR and vehicle modules.</p>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="label font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="label font-medium">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <div className="mt-2 text-right">
                            <Link to="/forgotPassword" className="text-sm text-slate-600 hover:text-slate-900">Forgot password?</Link>
                        </div>

                        <button type="submit" className="btn w-full border-none bg-slate-900 text-white hover:bg-slate-800">
                            Register
                        </button>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>Already have an Account?</span>
                            <Link to="/login" className="font-medium text-slate-900 hover:underline">
                                Login
                            </Link>
                        </div>

                        <p className="text-center text-sm text-slate-400">Or</p>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
