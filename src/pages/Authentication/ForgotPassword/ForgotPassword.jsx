import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // 👉 Here you will call your API
    };

    return (
        <div className="flex items-center justify-center px-2 py-4 sm:px-4">
            <div className="card w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm">

                {/* Header */}
                <div className="px-6 pt-6 space-y-1">
                    <h1 className="text-3xl font-bold text-slate-900">Forgot Password</h1>
                    <p className="text-slate-600">
                        Enter your email address and we’ll send you a reset link.
                    </p>
                </div>

                {/* Form */}
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div>
                            <label className="label font-medium">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <button className="btn w-full border-none bg-slate-900 text-white hover:bg-slate-800 mt-2">
                            Send
                        </button>

                        <div className="mt-2 flex items-center justify-center gap-1 text-sm text-slate-600">
                            <span>Remember your password?</span>
                            <Link to="/login" className="font-medium text-slate-900 hover:underline">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
