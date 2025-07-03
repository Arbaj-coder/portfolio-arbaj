import { useState } from "react";
import { Link } from "react-router-dom"
import useDarkMode from "../hooks/useDarkMode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 fixed w-full top-0 z-50 shadow transition-all">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold flex gap-4 items-center">
            <svg width="40" height="40" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M314.516 203.174L314.516 349.104L162.117 208.727M314.516 203.174L282.653 203.26M314.516 203.174L337.498 203.26L380.617 170.782L314.516 170.782M162.117 208.727L117.661 170.634L157.117 170.782M162.117 208.727L65.1165 301.139L20.176 301.139L137.099 188.83M200.117 170.782L282.653 96.1739L282.653 170.782M200.117 170.782L282.653 170.782M200.117 170.782L157.117 170.782M282.653 203.26L210.462 202.796L282.653 270.76L282.653 203.26ZM282.653 170.782L314.516 170.782M157.117 170.782L315.751 20.1061L314.516 170.782"
                stroke="currentColor"
                strokeWidth="10"
              />
            </svg>
            Arbaj Khan
          </h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 text-sm items-center">
            <li><a href="#home" className="hover:text-[#00ff88]">Home</a></li>
            <li><a href="#competitive" className="hover:text-[#00ff88]">Competitive</a></li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
            </li>
            <li><a href="#contact" className="hover:text-[#00ff88]">Contact</a></li>
            <li>
              <div className="flex gap-4 items-center">
                {/* Sun icon */}
                <button onClick={toggleTheme} title="Toggle Theme" className="transition hover:text-[#00ff88]">
                  {theme === "dark" ? (
                    // Moon icon for dark mode
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.07 9.79z"
                      />
                    </svg>

                  ) : (
                    // Sun icon for light mode
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </button>

                {/* Phone */}
                <a href="tel:8504060786" className="hover:text-[#00ff88]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                             19.79 19.79 0 0 1-8.63-3.07 
                             19.5 19.5 0 0 1-6-6 
                             19.79 19.79 0 0 1-3.07-8.67 
                             A2 2 0 0 1 4.11 2h3a2 2 0 0 1 
                             2 1.72 12.84 12.84 0 0 0 
                             .7 2.81 2 2 0 0 1-.45 2.11L8.09 
                             9.91a16 16 0 0 0 6 6l1.27-1.27a2 
                             2 0 0 1 2.11-.45 12.84 12.84 0 0 
                             0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/8504060786?text=Hi%20Arbaj" target="_blank" rel="noreferrer" className="hover:text-green-400">
                  <i className="fab fa-whatsapp text-xl"></i>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                </a>
              </div>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(true)} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sliding Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            ✕
          </button>
        </div>
        <ul className="p-6 space-y-4 text-sm">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 block">Home</a></li>
          <li><a href="#competitive" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 block">Competitive</a></li>
          <li>
  <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 block">
    Projects
  </Link>
</li>

          <li><Link to="/#contact" className="hover:text-[#00ff88]">Contact</Link>
</li>
          <li className="pt-4 border-t border-gray-600">
            <div className="flex gap-4">
              {/* Sun Icon */}
                <button onClick={toggleTheme} title="Toggle Theme" className="transition hover:text-[#00ff88]">
                  {theme === "dark" ? (
                    // Moon icon for dark mode
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.07 9.79z"
                      />
                    </svg>

                  ) : (
                    // Sun icon for light mode
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </button>
              {/* Phone */}
              <a href="tel:9824989238" className="hover:text-[#00ff88]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.12 3.37a1 1 0 01-.24 1.01L6.62 10.6a16.02 16.02 0 006.78 6.78l2.54-2.54a1 1 0 011.01-.24l3.37 1.12a1 1 0 01.68.95V19a2 2 0 01-2 2h-.01C10.07 21 3 13.93 3 5v0z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/9824989238?text=Hi%20Arbaj" target="_blank" rel="noreferrer" className="hover:text-green-400">
                <i className="fab fa-whatsapp text-xl"></i>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
