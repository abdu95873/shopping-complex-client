import React from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Reset Password Data:", data);
        // 👉 Here you will call your API to reset password
    };

    const newPassword = watch("newPassword");

    return (
        <div className="flex items-center justify-center px-2 py-4 sm:px-4">
            <div className="card w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm">

                {/* Header */}
                <div className="px-6 pt-6">
                    <h1 className="text-3xl font-bold text-slate-900">Reset Password</h1>
                    <p className="text-slate-600">Set a new secure password.</p>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* New Password */}
                        <div>
                            <label className="label font-medium">New Password</label>
                            <input
                                type="password"
                                placeholder="New Password"
                                className="input input-bordered w-full"
                                {...register("newPassword", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            {errors.newPassword && (
                                <p className="text-red-500 text-sm">
                                    {errors.newPassword.message}
                                </p>
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
                                        value === newPassword || "Passwords do not match",
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        <button className="btn w-full border-none bg-slate-900 text-white hover:bg-slate-800 mt-4">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
