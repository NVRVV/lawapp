import React, { useState, useEffect } from 'react';
import filter1 from '../assets/filter-icon.png';
import pro1 from '../assets/profile-icon.png';
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        // Check if first_name is in the token payload
        if (decodedToken.first_name) {
          setUser(decodedToken);
        } else {
          console.error('First name not found in token payload');
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  // State to track the current screen size category
  const [screenSize, setScreenSize] = useState('desktop'); // Default to desktop

  // Define breakpoints (in pixels)
  const BREAKPOINTS = {
    mobile: 768,  // Up to 768px for mobile
    tablet: 1024, // Up to 1024px for tablet
    desktop: 1024 // Above 1024px for desktop
  };

  // Update screen size on mount and when window is resized
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setScreenSize('mobile');
      } else if (width <= BREAKPOINTS.tablet) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render different layouts based on screen size using if-else-if
  if (screenSize === 'mobile') {
    return (
      <>
        <header className="p-4 w-full bg-transparent">
          <div className="flex flex-row items-center">
            <div className="flex flex-1 flex-col items-start mt-3  mb-3 md:mb-0">
              <h1
                className="text-2xl text-white mx-5 cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-sm text-white font-medium mt-1">Your trusted legal partner</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
              {user ? (
                <img
                src={filter1}
                alt="Filter"
                className={user.role === 'client' ? "cursor-pointer w-6 h-6 ml-5 mr-2" : "hidden"}
                onClick={() => {
                if (user.role === 'client') {
                navigate('/filter');
                }
                }}
                />
                ) : (
                <img
                src={filter1}
                alt="Filter"
                className="hidden"
                />
                )}
                {user ? (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7"
                onClick={() => {
                  if (user.role === 'client') {
                navigate('/user-profile'); // Redirect to form after login for lawyers
                } else {
                 navigate('/lawyer-dashboard');
                }
                }}
                />
                ) : (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7 hidden"
                />
                )}
              </div>
              {user ? (
                <div className='relative'>
                  <button 
                    className=" p-4  flex items-center justify-between"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <h1 className="text-xl mr-5 text-white cursor-pointer">
                        {user.first_name}
                      </h1>
                    <span className="text-white">▼</span>
                  </button>
                  {isMenuOpen && (
                    <div className='absolute mt-2 w-auto px-2 py-1 rounded-lg bg-white shadow-lg'>
                      
                      <button
                        className="text-xl mr-5 text-black cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <h1
                  className="text-xl mr-5 text-white cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
                </h1>
              )}
            </div>
          </div>
        </header>
      </>
    );
  } else if (screenSize === 'tablet') {
    return (
      <>
        <header className="p-4 w-full bg-transparent">
          <div className="flex flex-row md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <h1
                className="text-3xl text-white cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-md text-white font-medium mt-1">Your trusted legal partner</p>
            </div>
            <div className="flex items-center gap-4">
            {user ? (
                <img
                src={filter1}
                alt="Filter"
                className="cursor-pointer w-6 h-6 ml-5 mr-2"
                onClick={() => { if (user.role === 'client')navigate('/filter')}}
              />
              ) : (
                <img
                src={filter1}
                alt="Filter"
                className="cursor-pointer w-6 h-6 ml-5 mr-2 hidden"
                />
              )}
              {user ? (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7"
                onClick={() => {
                  if (user.role === 'client') {
                navigate('/user-profile'); // Redirect to form after login for lawyers
                } else {
                 navigate('/lawyer-dashboard');
                }
                }}
                />
                ) : (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7 hidden"
                />
                )}
              {user ? (
                <div className='relative'>
                  <button 
                    className=" p-4  flex items-center justify-between"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <h1 className="text-xl mr-5 text-white cursor-pointer">
                        {user.first_name}
                      </h1>
                    <span className="text-white">▼</span>
                  </button>
                  {isMenuOpen && (
                    <div className='absolute mt-2 w-auto px-2 py-1 rounded-lg bg-white shadow-lg'>
                      
                      <button
                        className="text-xl  text-black cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <h1
                  className="text-xl mr-5 text-white cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
                </h1>
              )}
            </div>
          </div>
        </header>
      </>
    );
  } else { // desktop
    return (
      <>
        <header className="p-4 w-full bg-transparent">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 items-start flex-col mt-5 mb-2 ml-5">
              <h1
                className="text-3xl text-white cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-xs text-white font-medium">Your trusted legal partner</p>
            </div>
            <div className="flex items-center justify-center">
              {user ? (
                <img
                src={filter1}
                alt="Filter"
                className="cursor-pointer w-6 h-6 ml-5 mr-2"
                onClick={() => { if (user.role === 'client')navigate('/filter')}}
              />
              ) : (
                <img
                src={filter1}
                alt="Filter"
                className="cursor-pointer w-6 h-6 ml-5 mr-2 hidden"
                />
              )}
              {user ? (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7"
                onClick={() => {
                  if (user.role === 'client') {
                navigate('/user-profile'); // Redirect to form after login for lawyers
                } else {
                 navigate('/lawyer-dashboard');
                }
                }}
                />
                ) : (
                <img
                src={pro1}
                alt="Profile"
                className="cursor-pointer w-7 h-7 hidden"
                />
                )}
              {user ? (
                <div className='relative'>
                  <button 
                    className=" p-4  flex items-center justify-between"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <h1 className="text-xl mr-5 text-white cursor-pointer">
                        {user.first_name}
                      </h1>
                    <span className="text-white">▼</span>
                  </button>
                  {isMenuOpen && (
                    <div className='absolute mt-2 w-auto px-2 py-1 rounded-lg bg-white shadow-lg'>
                      
                      <button
                        className="text-xl mr-5 text-black cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <h1
                  className="text-xl mr-5 text-white cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
                </h1>
              )}
            </div>
          </div>
        </header>
      </>
    );
  }
};

export default Header2;