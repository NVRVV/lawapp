import React, { useState } from 'react';
import Header2 from '../../components/Header2';
import FilterSection from './FilterSection';
import FeedCard from './FeedCard';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      <section className='w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/src/assets/filter-hero.jpg')" }}>
        <Header2 />
        <button className='p-2 pl-5 pr-5 bg-bg1 justify-end items-end ml-300 text-2xl'
        onClick={() => navigate('/form')}>Upload</button>
        <div className="container mx-auto p-6 flex gap-6">
          {/* Filter Section (Left) */}
          <FilterSection onFilterChange={handleFilterChange} filters={filters} />

          {/* Feeds Section (Right) */}
          <div className="w-2/3 space-y-4">
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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;