import React from 'react';
import fitericon from '../../assets/filter-icon-b.png';
import star from '../../assets/star.png';

const FilterSection = ({ onFilterChange, filters }) => {
  return (
    <div className="w-1/3 p-6 mt-5 ml-10 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4"><img className='w-7 h-7' src={fitericon} /> Filters</h2>
      <div className="space-y-4">
        {/* Rating Filter (unchanged) */}
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

        {/* Success Rate Filter (Range: 0% to 100%, showing 0 to selected %) */}
        <div>
          <h3 className="font-semibold mb-2">Success Rate</h3>
          <div className="space-y-2">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={filters.successRate || 100} // Default to 0 (show all)
              onChange={(e) => onFilterChange('successRate', parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">Selected: 0% to {filters.successRate || 100}%</p>
          </div>
        </div>

        {/* Experience Filter (unchanged) */}
        <div>
          <h3 className="font-semibold mb-2">Experience</h3>
          <div className="space-y-2">
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={filters.experience || 1} // Default to minimum (1 year)
              onChange={(e) => onFilterChange('experience', parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-600">Selected: {filters.experience || 1} years</p>
          </div>
        </div>

        {/* Categories Filter (unchanged) */}
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
                {category}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;