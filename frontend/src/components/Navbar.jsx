// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useDarkMode } from '../context/DarkModeContext';
// import { useState } from 'react';

// const Navbar = () => {
//   const { isAuthenticated, logout, user } = useAuth();
//   const { isDark, toggleDarkMode } = useDarkMode();
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="text-2xl font-bold text-[#FF7331]">
//             ABDIFATAH DEV
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Dark Mode Toggle */}
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleDarkMode();
//               }}
//               className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
//               aria-label="Toggle dark mode"
//             >
//               {isDark ? (
//                 <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//                 </svg>
//               )}
//             </button>
            
//             <div className="flex items-center space-x-8">
//               <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                 Home
//               </Link>
//               <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                 About
//               </Link>
//               <Link to="/skills" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                 Skills
//               </Link>
//               <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                 Projects
//               </Link>
//               <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                 Contact
//               </Link>
//               {isAuthenticated ? (
//                 <>
//                   <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                     Dashboard
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="btn-secondary text-sm"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-[#FF7331] transition">
//                     Login
//                   </Link>
//                   <Link to="/signup" className="bg-[#FF7331] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e55a1f] transition-colors duration-200 text-sm">
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu Button and Dark Mode Toggle */}
//           <div className="md:hidden flex items-center space-x-2">
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleDarkMode();
//               }}
//               className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
//               aria-label="Toggle dark mode"
//             >
//               {isDark ? (
//                 <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//                 </svg>
//               )}
//             </button>
//             <button
//               className="text-gray-700 dark:text-gray-300"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 space-y-2 bg-white dark:bg-gray-800">
//             <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//               Home
//             </Link>
//             <Link to="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//               About
//             </Link>
//             <Link to="/skills" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//               Skills
//             </Link>
//             <Link to="/projects" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//               Projects
//             </Link>
//             <Link to="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//               Contact
//             </Link>
//             {isAuthenticated ? (
//               <>
//                 <Link to="/dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                   Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="block px-4 py-2 text-[#FF7331] hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useDarkMode } from '../context/DarkModeContext';
import { useState } from 'react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { isDark, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-slate-900 shadow-md fixed w-full top-0 z-50 border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-[#FF7331] hover:text-orange-400 transition">
            ABDIFATAH DEV
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-sky-500/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#FF7331] transition">Home</Link>
              <Link to="/about" className="text-white hover:text-[#FF7331] transition">About</Link>
              <Link to="/skills" className="text-white hover:text-[#FF7331] transition">Skills</Link>
              <Link to="/projects" className="text-white hover:text-[#FF7331] transition">Projects</Link>
              <Link to="/contact" className="text-white hover:text-[#FF7331] transition">Contact</Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-[#FF7331] transition">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-[#FF7331] transition">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#FF7331] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
            </div>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-sky-500/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-slate-900 border-t border-sky-500/20">
            {['/', '/about', '/skills', '/projects', '/contact'].map((path, i) => (
              <Link
                key={i}
                to={path}
                className="block px-4 py-2 text-white hover:text-[#FF7331] hover:bg-gray-900 rounded transition"
              >
                {['Home', 'About', 'Skills', 'Projects', 'Contact'][i]}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-white hover:text-[#FF7331] hover:bg-gray-900 rounded transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-sky-500/20 rounded transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white hover:text-[#FF7331] hover:bg-gray-900 rounded transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-[#FF7331] hover:bg-orange-500/20 rounded transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
