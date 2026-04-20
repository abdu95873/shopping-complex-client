import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // ✅ get navigate hook
    const { signInUser } = useAuth();
    const location = useLocation(); // <-- Added this

    const from = location.state?.from?.pathname || '/';


    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // 👉 Call your login API here
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    };

    return (
        <div className="flex w-full items-center justify-center px-2 py-4 sm:px-4">
            <div className="card w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="px-6 pt-6">
                    <h1 className="text-3xl mb-1 font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-slate-600">Sign in to continue managing QR and vehicles.</p>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Forgot Password */}
                        <div className="mt-2 text-right">
                            <Link to="/forgotPassword" className="text-sm text-slate-600 hover:text-slate-900">Forgot password?</Link>
                        </div>

                        <button type="submit" className="btn w-full border-none bg-slate-900 text-white hover:bg-slate-800">
                            Login
                        </button>

                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>Don't have any Account?</span>
                            <Link to="/register" className="font-medium text-slate-900 hover:underline">Register</Link>
                        </div>

                        <p className="text-center text-sm text-slate-400">Or</p>
                        <SocialLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
