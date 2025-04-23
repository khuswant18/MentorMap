import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
  const [filters, setFilters] = useState({
    collegeType: { private: false, government: false },
    location: { delhi: false, mumbai: false, pune: false, chennai: false },
    courses: { btech: false, mbbs: false, bba: false, bsc: false },
  });
 
  const handleCheckboxChange = (category, option) => {
    setFilters((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [option]: !prevState[category][option],
      },
    }));
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setFilters((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        search: value,
      },
    }));
  };

  const resetFilters = () => {
    setFilters({
      collegeType: { private: false, government: false },
      location: { delhi: false, mumbai: false, pune: false, chennai: false },
      courses: { btech: false, mbbs: false, bba: false, bsc: false },
    });
  };

  return (
    <aside className="sidebar"> 

      <div className="filter-section">

        <h3>College Type</h3>

        <label>
          <input
            type="checkbox"
            checked={filters.collegeType.private}
            onChange={() => handleCheckboxChange('collegeType', 'private')}
          />
          Private
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.collegeType.government}
            onChange={() => handleCheckboxChange('collegeType', 'government')}
          />
          Government
        </label>

      </div>

      <hr />

      <div className="filter-section">
        <h3>Location</h3>
        <input
          type="text"
          placeholder="Search for a location"
          className="search-bar"
          value={filters.location.search || ''}
          onChange={handleSearchChange}
        />
        {['delhi', 'mumbai', 'pune', 'chennai'].map((city) => (
          <label key={city}>
            <input
              type="checkbox"
              checked={filters.location[city]}
              onChange={() => handleCheckboxChange('location', city)}
            />
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </label>
        ))}
      </div>

      <hr />

      <div className="filter-section">
        <h3>Courses Offered</h3>
        {['B.tech', 'MBBS', 'BBA', 'B.sc'].map((course) => (
          <label key={course}>
            <input
              type="checkbox"
              checked={filters.courses[course]}
              onChange={() => handleCheckboxChange('courses', course)}
            />
            {course}
          </label>
        ))}
      </div>

      <div className="button-section">
        <button onClick={resetFilters} className='reset-button'>Reset</button>
        <button onClick={() => console.log(filters)} className='apply-button'>Apply</button>
      </div>
      
    </aside>
  );
};

export default Sidebar;
