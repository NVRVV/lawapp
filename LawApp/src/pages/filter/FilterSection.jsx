import React, { useState, useEffect } from 'react';
import fitericon from '../../assets/filter-icon-b.png';
import star from '../../assets/star.png';

// Add this CSS for the glass effect in your Tailwind config or a separate CSS file
const styles = `
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const FilterSection = ({ onFilterChange, filters }) => {
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
      <div className="w-full bg-white text-blackx p-4 rounded-lg shadow-lg glass-effect">
        <h2 className="text-lg font-bold mb-4 flex items-center"><img className='w-6 h-6' src={fitericon} /> Filters</h2>
        <div className="space-y-3">
          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-sm">Rating</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((stars) => (
                <label key={stars} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.rating.includes(stars.toString())}
                    onChange={() => onFilterChange('rating', stars.toString())}
                  />
                  {Array.from({ length: stars }, (_, i) => (
                    <span key={i}><img src={star} className="w-4 h-4" /></span>
                  ))}
                </label>
              ))}
            </div>
          </div>

          {/* Success Rate Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-sm">Success Rate</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={filters.successRate || 100} // Default to 0 (show all)
                onChange={(e) => onFilterChange('successRate', parseInt(e.target.value))}
                className="w-full accent-secondary"
              />
              <p className="text-gray-300 text-sm">Selected: 0% to {filters.successRate || 100}%</p>
            </div>
          </div>

          {/* Experience Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-sm">Experience</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={filters.experience || 1} // Default to minimum (1 year)
                onChange={(e) => onFilterChange('experience', parseInt(e.target.value))}
                className="w-full accent-secondary"
              />
              <p className="text-gray-300 text-sm">Selected: {filters.experience || 1} years</p>
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-sm">Categories</h3>
            <div className="space-y-2">
              {['Criminal', 'Civil', 'Intellectual Property', 'Immigration'].map((category) => (
                <label key={category} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.categories.includes(category)}
                    onChange={() => onFilterChange('categories', category)}
                  />
                  <span className="text-black text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (screenSize === 'tablet') {
    return (
      <div className="w-full bg-white text-black p-5 rounded-lg shadow-lg glass-effect">
        <h2 className="text-xl font-bold mb-4 flex items-center"><img className='w-6 h-6' src={fitericon} /> Filters</h2>
        <div className="space-y-4">
          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-base">Rating</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((stars) => (
                <label key={stars} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.rating.includes(stars.toString())}
                    onChange={() => onFilterChange('rating', stars.toString())}
                  />
                  {Array.from({ length: stars }, (_, i) => (
                    <span key={i}><img src={star} className="w-4 h-4" /></span>
                  ))}
                </label>
              ))}
            </div>
          </div>

          {/* Success Rate Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-base">Success Rate</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={filters.successRate || 100} // Default to 0 (show all)
                onChange={(e) => onFilterChange('successRate', parseInt(e.target.value))}
                className="w-full accent-secondary"
              />
              <p className="text-gray-300 text-base">Selected: 0% to {filters.successRate || 100}%</p>
            </div>
          </div>

          {/* Experience Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-base">Experience</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={filters.experience || 1} // Default to minimum (1 year)
                onChange={(e) => onFilterChange('experience', parseInt(e.target.value))}
                className="w-full accent-secondary"
              />
              <p className="text-gray-300 text-base">Selected: {filters.experience || 1} years</p>
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold mb-2 text-base">Categories</h3>
            <div className="space-y-2">
              {['Criminal', 'Civil', 'Intellectual Property', 'Immigration'].map((category) => (
                <label key={category} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.categories.includes(category)}
                    onChange={() => onFilterChange('categories', category)}
                  />
                  <span className="text-black text-base">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else { // desktop
    return (
      <div className=" w-1/3 bg-gray-800 text-white p-7 rounded-lg shadow-lg glass-effect">
        <h2 className="text-xl font-bold mb-4 flex items-center"><img className='w-7 h-7' src={fitericon} /> Filters</h2>
        <div className="space-y-4">
          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold mb-2">Rating</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((stars) => (
                <label key={stars} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.rating.includes(stars.toString())}
                    onChange={() => onFilterChange('rating', stars.toString())}
                  />
                  {Array.from({ length: stars }, (_, i) => (
                    <span key={i}><img src={star} className="w-5 h-5" /></span>
                  ))}
                </label>
              ))}
            </div>
          </div>

          {/* Success Rate Filter */}
          <div>
            <h3 className="font-semibold mb-2">Success Rate</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={filters.successRate || 100} // Default to 0 (show all)
                onChange={(e) => onFilterChange('successRate', parseInt(e.target.value))}
                className="w-full accent-white"
              />
              <p className="text-gray-300">Selected: 0% to {filters.successRate || 100}%</p>
            </div>
          </div>

          {/* Experience Filter */}
          <div>
            <h3 className="font-semibold mb-2">Experience</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={filters.experience || 1} // Default to minimum (1 year)
                onChange={(e) => onFilterChange('experience', parseInt(e.target.value))}
                className="w-full accent-white"
              />
              <p className="text-gray-300">Selected: {filters.experience || 1} years</p>
            </div>
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="space-y-2">
              {['Criminal', 'Civil', 'Intellectual Property', 'Immigration'].map((category) => (
                <label key={category} className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={filters.categories.includes(category)}
                    onChange={() => onFilterChange('categories', category)}
                  />
                  <span className="text-white">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FilterSection;