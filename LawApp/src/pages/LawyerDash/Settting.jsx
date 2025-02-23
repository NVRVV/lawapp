import React, { useState, useEffect } from 'react';
import Header2 from '../../components/Header2';
import { useNavigate } from 'react-router-dom';

// Add this CSS for the glass effect in your Tailwind config or a separate CSS file
const styles = `
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Settings = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({ currentEmail: 'ram@gmail.com', newEmail: '', confirmEmail: '' });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1024,
  };

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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEmail = formData.get('newEmail');
    const confirmEmail = formData.get('confirmEmail');
    if (newEmail === confirmEmail) {
      setEmailForm((prev) => ({ ...prev, newEmail, confirmEmail }));
      console.log('Email updated:', { currentEmail: emailForm.currentEmail, newEmail, confirmEmail });
      setIsEmailPopupOpen(false);
    } else {
      alert('New email and confirm email must match!');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const currentPassword = formData.get('currentPassword');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');
    if (newPassword === confirmPassword) {
      setPasswordForm({ currentPassword, newPassword, confirmPassword });
      console.log('Password updated:', { currentPassword, newPassword, confirmPassword });
      setIsPasswordPopupOpen(false);
    } else {
      alert('New password and confirm password must match!');
    }
  };

  // Popup Components with cross mark aligned horizontally
  const EmailPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md glass-effect">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-black">Change Email</h3>
          <button className="text-black text-2xl font-bold cursor-pointer" onClick={() => setIsEmailPopupOpen(false)}>✕</button>
        </div>
        <form onSubmit={handleEmailSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">Current Email</label>
            <input
              type="email"
              name="currentEmail"
              value={emailForm.currentEmail}
              disabled
              className="w-full p-2 rounded bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">New Email</label>
            <input
              type="email"
              name="newEmail"
              className="w-full p-2 rounded border focus:outline-none text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">Confirm Email</label>
            <input
              type="email"
              name="confirmEmail"
              className="w-full p-2 rounded border focus:outline-none text-black"
              required
            />
          </div>
          <button type="submit" className="bg-secondary text-white p-2 rounded w-full">Save</button>
        </form>
      </div>
    </div>
  );

  const PasswordPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md glass-effect">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-black">Change Password</h3>
          <button className="text-black text-2xl font-bold cursor-pointer" onClick={() => setIsPasswordPopupOpen(false)}>✕</button>
        </div>
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              className="w-full p-2 rounded border focus:outline-none text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              className="w-full p-2 rounded border focus:outline-none text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 rounded border focus:outline-none text-black"
              required
            />
          </div>
          <button type="submit" className="bg-secondary text-white p-2 rounded w-full">Save</button>
        </form>
      </div>
    </div>
  );

  // Render different layouts based on screen size
  if (screenSize === 'mobile') {
    return (
      <section className="bg-bg2">
        <Header2 />
        <div className="min-h-screen flex-col items-center bg-cover bg-center">
          <button
            className="bg-white/80 backdrop-blur-md p-4 w-xs rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>
          {isMenuOpen && (
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect w-full max-w-xs">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>
                  Dashboard
                </button>
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>
                  Clients
                </button>
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>
                  Settings
                </button>
              </nav>
            </div>
          )}
          <div className="flex-1 items-center p-4 mt-5">
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 pl-2 shadow-lg glass-effect mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-black">Settings</h3>
              <h2 className="text-xl font-semibold text-black mb-2">Welcome!</h2>
              <h2 className="text-xl text-black mb-2">User Name</h2>
              <h2 className="mt-4 text-sm text-black">Change Email</h2>
              <div className="bg-bg flex p-2 rounded-lg mb-4">
                <h2 className="text-sm pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-20 cursor-pointer" onClick={() => setIsEmailPopupOpen(true)}>Change</h2>
              </div>
              <h2 className="mt-4 text-sm text-black">Change Password</h2>
              <div className="bg-bg flex p-2 rounded-lg">
                <h2 className="text-sm pl-2">*******</h2>
                <h2 className="text-red-500 pl-20 cursor-pointer" onClick={() => setIsPasswordPopupOpen(true)}>Change</h2>
              </div>
            </div>
          </div>
        </div>
        {isEmailPopupOpen && <EmailPopup />}
        {isPasswordPopupOpen && <PasswordPopup />}
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className="bg-bg2">
        <Header2 />
        <div className="min-h-screen flex-col items-center bg-cover bg-center">
          <button
            className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-10 ml-10 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>
          {isMenuOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full max-w-xl mt-2 ml-10 mr-5 shadow-lg glass-effect">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>
                  Dashboard
                </button>
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>
                  Clients
                </button>
                <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>
                  Settings
                </button>
              </nav>
            </div>
          )}
          <div className="flex-1 p-4 mt-5 mr-5">
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 pl-5 ml-5 shadow-lg glass-effect mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-black">Settings</h3>
              <h2 className="text-xl font-semibold text-black mb-4">Welcome!</h2>
              <h2 className="text-xl text-black mb-4">User Name</h2>
              <h2 className="mt-6 text-base text-black">Change Email</h2>
              <div className="bg-bg flex p-3 rounded-lg mb-6">
                <h2 className="text-base pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-32 cursor-pointer" onClick={() => setIsEmailPopupOpen(true)}>Change</h2>
              </div>
              <h2 className="mt-6 text-base text-black">Change Password</h2>
              <div className="bg-bg flex p-3 rounded-lg">
                <h2 className="text-base pl-2">*******</h2>
                <h2 className="text-red-500 pl-32 cursor-pointer" onClick={() => setIsPasswordPopupOpen(true)}>Change</h2>
              </div>
            </div>
          </div>
        </div>
        {isEmailPopupOpen && <EmailPopup />}
        {isPasswordPopupOpen && <PasswordPopup />}
      </section>
    );
  } else {
    return (
      <section className="bg-bg2">
        <Header2 />
        <div className="max-h-screen flex">
          <div className="w-80 bg-white/80 text-black ml-15 h-80 mt-10 px-4 py-10 rounded-lg shadow-lg glass-effect">
            <h2 className="text-2xl font-bold ml-2 mb-10">SLMB</h2>
            <nav className="space-y-2">
              <button className="mb-5 w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>
                Dashboard
              </button>
              <button className="mb-5 w-full bg-secondary text-white p-2 cursor-pointer rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>
                Clients
              </button>
              <button className="w-full bg-secondary text-white p-2 rounded cursor-pointer hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>
                Settings
              </button>
            </nav>
          </div>
          <div className="flex-1 p-6 w-full mt-4 max-w-4xl">
            <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 pl-10 ml-10 shadow-lg glass-effect mb-6">
              <h3 className="text-4xl font-semibold mb-2 text-black">Settings</h3>
              <h2 className="text-3xl font-semibold text-black mt-4 mb-4">Welcome!</h2>
              <h2 className="text-2xl text-black mb-4">User Name</h2>
              <h2 className="mt-7 text-lg text-black">Change Email</h2>
              <div className="bg-bg flex p-4 mr-5 rounded-lg mb-6">
                <h2 className="text-base pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 ml-10 cursor-pointer" onClick={() => setIsEmailPopupOpen(true)}>Change</h2>
              </div>
              <h2 className="mt-7 text-lg text-black">Change Password</h2>
              <div className="bg-bg flex flex-1 p-4 mr-5 rounded-lg">
                <h2 className="text-base items-start pl-2">*******</h2>
                <h2 className="text-red-500 ml-10 cursor-pointer" onClick={() => setIsPasswordPopupOpen(true)}>Change</h2>
              </div>
            </div>
          </div>
        </div>
        {isEmailPopupOpen && <EmailPopup />}
        {isPasswordPopupOpen && <PasswordPopup />}
      </section>
    );
  }
};

export default Settings;