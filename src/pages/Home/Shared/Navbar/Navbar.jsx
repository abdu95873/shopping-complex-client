import React from 'react';
import ProFastLogo from '../Logo/ProFastLogo';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, Search } from 'lucide-react';
import useAuth from '../../../../hooks/useAuth';


const Navbar = () => {
  const navigate = useNavigate(); // ✅ get navigate hook


  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  const publicNavItems = [
    { label: 'Home', to: '/', hasMenu: true },
    { label: 'About', to: '/about-us', hasMenu: true },
    { label: 'Services', to: '/services', hasMenu: true },
    { label: 'Projects', to: '/services', hasMenu: true },
    { label: 'Pages', to: '/contact', hasMenu: true },
    { label: 'Blog', to: '/contact', hasMenu: true },
    { label: 'Contact', to: '/contact', hasMenu: true },
  ];
  const navItems = publicNavItems;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="logo-box">
          <Link to="/" className="inline-flex items-center">
            <ProFastLogo className="text-white" />
          </Link>
        </div>

        <div className="right-column flex items-center gap-2 sm:gap-3">
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                        isActive ? "text-rose-400" : "text-slate-200 hover:text-white"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    {item.hasMenu && <ChevronDown size={13} className="opacity-70" />}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-100 hover:bg-slate-800 md:inline-flex">
            <Search size={15} />
          </button>
          <button type="button" className="hidden h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-100 hover:bg-slate-800 md:inline-flex">
            <Menu size={15} />
          </button>

          {user ? (
            <button onClick={handleLogOut} className="hidden rounded-full bg-rose-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-rose-600 sm:inline-flex">
              Logout
            </button>
          ) : (
            <Link to="/contact" className="hidden rounded-full bg-rose-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-rose-600 sm:inline-flex">
              Get Appointment
            </Link>
          )}

          <div className="dropdown xl:hidden">
            <button tabIndex={0} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-100">
              <Menu size={16} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content right-0 z-10 mt-3 w-64 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl"
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm ${isActive ? "bg-rose-500 text-white" : "text-slate-200 hover:bg-slate-800"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {!user && (
                <li>
                  <Link to="/login" className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">Sign In</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
