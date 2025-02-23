import React, { useState, useEffect } from 'react';
import Header2 from '../../components/Header2';
import FilterSection from './FilterSection';
import FeedCard from './FeedCard';
import { useNavigate } from 'react-router-dom';
import FeedModal from './FeedModal'; // Import the new modal component

const Filter = () => {
  const navigate = useNavigate();

  const initialFeedData = [
    { name: "Advocate Name", category: 'Criminal', rating: '2', experience: '5 years', location: "Location", fee: 10000, successRate: 95 },
    { name: "Advocate Name", category: 'Civil', rating: '4', experience: '6 years', location: "Location", fee: 15000, successRate: 90 },
    { name: "Advocate Name", category: 'Intellectual Property', rating: '3', experience: '7 years', location: "Location", fee: 12000, successRate: 85 },
    { name: "Advocate Name", category: 'Immigration', rating: '4', experience: '3 years', location: "Location", fee: 8000, successRate: 88 },
    { name: "Advocate Name", category: 'Civil', rating: '5', experience: '12 years', location: "Location", fee: 20000, successRate: 92 },
  ];

  // State for filter selections, with default successRate set to 0 (show all)
  const [filters, setFilters] = useState({
    rating: [],
    successRate: 0, // Default to 0 (show all success rates)
    experience: 1,  // Default to minimum (1 year)
    categories: [],
  });

  // State for modal management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState(null);

  // State for filter toggle on mobile
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handler to update filters
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      if (filterType === 'rating' || filterType === 'categories') {
        const updatedValues = prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value];
        return { ...prevFilters, [filterType]: updatedValues };
      } else {
        return { ...prevFilters, [filterType]: value }; // For range inputs (successRate, experience)
      }
    });
  };

  // Parse experience years from the string (e.g., "5 years" -> 5)
  const parseExperienceYears = (experience) => {
    const years = parseInt(experience.split(' ')[0], 10);
    return isNaN(years) ? 0 : years;
  };

  // Filter the feed data based on selected filters
  const filteredFeedData = initialFeedData.filter((feed) => {
    const ratingMatch = filters.rating.length === 0 || filters.rating.includes(feed.rating);
    const successRateMatch = filters.successRate === 0 || feed.successRate <= filters.successRate; // Show 0% to selected %
    const experienceMatch = parseExperienceYears(feed.experience) >= filters.experience; // Match if experience years are >= selected value
    const categoryMatch = filters.categories.length === 0 || filters.categories.includes(feed.category);

    return ratingMatch && successRateMatch && experienceMatch && categoryMatch;
  });

  // Handler for opening the modal when a feed card is clicked
  const handleFeedClick = (feed) => {
    setSelectedFeed(feed);
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeed(null);
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
        <section className='w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/src/assets/filter-hero.jpg')" }}>
          <Header2 />
          <button 
            className='fixed bottom-5 right-5 p-4 bg-bg1 text-2xl rounded-full shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all'
            onClick={() => navigate('/form')}
          >
            Upload
          </button>
          {/* Filter Toggle Button (Mobile) */}
          <button 
            className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="text-lg font-bold text-black">Filters</span>
            <span className="text-black">▼</span>
          </button>

          {/* Filter Section (Hidden by default, shown on click) */}
          {isFilterOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect w-full max-w-xs">
              <FilterSection onFilterChange={handleFilterChange} filters={filters} />
            </div>
          )}

          {/* Feeds Section (Right) */}
          <div className="w-full p-4 space-y-4">
            {filteredFeedData.map((feed, index) => (
              <FeedCard 
                key={index}
                name={feed.name}
                category={feed.category}
                location={feed.location}
                fee={feed.fee}
                experience={feed.experience}
                successRate={feed.successRate}
                rating={feed.rating}
                onClick={() => handleFeedClick(feed)} // Add click handler to open modal
              />
            ))}
          </div>
        </section>

        {/* Render the modal if isModalOpen is true */}
        {isModalOpen && <FeedModal feed={selectedFeed} onClose={handleCloseModal} />}
      </>
    );
  } else if (screenSize === 'tablet') {
    return (
      <>
        <section className='w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/src/assets/filter-hero.jpg')" }}>
          <Header2 />
          <button 
            className='fixed bottom-5 right-5 p-4 bg-bg1 text-2xl rounded-full shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all'
            onClick={() => navigate('/form')}
          >
            Upload
          </button>
          {/* Filter Toggle Button (Tablet) */}
          <button 
            className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="text-lg font-bold text-black">Filters</span>
            <span className="text-black">▼</span>
          </button>

          {/* Filter Section (Hidden by default, shown on click) */}
          {isFilterOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full max-w-md mt-2 ml-5 mr-5 shadow-lg glass-effect">
              <FilterSection onFilterChange={handleFilterChange} filters={filters} />
            </div>
          )}

          {/* Feeds Section (Right) */}
          <div className="w-full p-5 space-y-4">
            {filteredFeedData.map((feed, index) => (
              <FeedCard 
                key={index}
                name={feed.name}
                category={feed.category}
                location={feed.location}
                fee={feed.fee}
                experience={feed.experience}
                successRate={feed.successRate}
                rating={feed.rating}
                onClick={() => handleFeedClick(feed)} // Add click handler to open modal
              />
            ))}
          </div>
        </section>

        {/* Render the modal if isModalOpen is true */}
        {isModalOpen && <FeedModal feed={selectedFeed} onClose={handleCloseModal} />}
      </>
    );
  } else { // desktop
    return (
      <>
        <section className='w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/src/assets/filter-hero.jpg')" }}>
          <Header2 />
          <button 
            className='fixed bottom-5 right-5 p-4 bg-bg1 text-2xl rounded-full shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all'
            onClick={() => navigate('/form')}
          >
            Upload
          </button>
          <div className="container mx-auto p-6 flex gap-6">
            {/* Filter Section (Left) */}
            <FilterSection onFilterChange={handleFilterChange} filters={filters} />

            {/* Feeds Section (Right) */}
            <div className="w-full space-y-4">
              {filteredFeedData.map((feed, index) => (
                <FeedCard 
                  key={index}
                  name={feed.name}
                  category={feed.category}
                  location={feed.location}
                  fee={feed.fee}
                  experience={feed.experience}
                  successRate={feed.successRate}
                  rating={feed.rating}
                  onClick={() => handleFeedClick(feed)} // Add click handler to open modal
                />
              ))}
            </div>
          </div>
        </section>

        {/* Render the modal if isModalOpen is true */}
        {isModalOpen && <FeedModal feed={selectedFeed} onClose={handleCloseModal} />}
      </>
    );
  }
};

export default Filter;