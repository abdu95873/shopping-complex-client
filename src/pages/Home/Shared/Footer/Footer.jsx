import React from 'react';
import ProFastLogo from '../Logo/ProFastLogo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="border-b border-slate-800">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-5 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-rose-400">📍</span>
            <p className="text-sm leading-7 text-slate-300">
              54B, Tailstoi Town 5238 MT,
              <br />
              La city, IA 522364
            </p>
          </div>
          <div className="flex items-start gap-3 md:justify-center">
            <span className="mt-1 text-rose-400">✉</span>
            <p className="text-sm leading-7 text-slate-300">
              Email us :
              <br />
              <a href="mailto:info@example.com" className="text-lg text-white hover:text-rose-300">info@example.com</a>
            </p>
          </div>
          <div className="flex items-start gap-3 md:justify-end">
            <span className="mt-1 text-rose-400">☎</span>
            <p className="text-sm leading-7 text-slate-300">
              Call us on :
              <br />
              <a href="tel:+1800-456-7890" className="text-xl font-medium text-white hover:text-rose-300">+1800-456-7890</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-6">
            <ProFastLogo className="text-white" />
          </div>
          <p className="text-sm text-slate-400">
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-white">Useful Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/about-us" className="hover:text-rose-300">About</Link></li>
            <li><Link to="/services" className="hover:text-rose-300">Team</Link></li>
            <li><Link to="/contact" className="hover:text-rose-300">Testimonials</Link></li>
            <li><Link to="/services" className="hover:text-rose-300">Blog Grid</Link></li>
            <li><Link to="/contact" className="hover:text-rose-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-white">Our Services</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/about-us" className="hover:text-rose-300">About</Link></li>
            <li><Link to="/services" className="hover:text-rose-300">Team</Link></li>
            <li><Link to="/contact" className="hover:text-rose-300">Testimonials</Link></li>
            <li><Link to="/services" className="hover:text-rose-300">Blog Grid</Link></li>
            <li><Link to="/contact" className="hover:text-rose-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-white">Newsletter</h4>
          <p className="mb-4 text-sm text-slate-400">Get latest updates and offers.</p>
          <div className="mb-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered h-11 w-full rounded-none border-slate-700 bg-slate-900 text-sm text-slate-200"
            />
            <button className="btn h-11 rounded-none border-none bg-rose-500 px-4 text-white hover:bg-rose-600">
              ➤
            </button>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-rose-400 hover:text-rose-300">f</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-rose-400 hover:text-rose-300">in</a>
            <a href="https://www.skype.com/" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-rose-400 hover:text-rose-300">sk</a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-rose-400 hover:text-rose-300">x</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-xs hover:border-rose-400 hover:text-rose-300">ig</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-3 px-4 py-4 text-sm text-slate-400 sm:px-6 md:flex-row lg:px-8">
          <p>© Copyright <span className="text-slate-200">buildnox</span> 2026 . All right reserved.</p>
          <p>Created By Themearc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;