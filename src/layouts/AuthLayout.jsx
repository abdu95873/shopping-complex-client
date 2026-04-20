import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProFastLogo from '../pages/Home/Shared/Logo/ProFastLogo';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex">
          <ProFastLogo />
        </Link>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 pb-6 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <Outlet />
        </div>

        <div className="hidden lg:flex items-center justify-center rounded-3xl border border-slate-200 bg-linear-to-br from-sky-100 via-indigo-100 to-purple-100 p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
            <p className="mt-3 text-slate-600">
              Securely manage QR tags, vehicles, and scanning operations in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
