import React, { useState } from 'react';
import HallsList from './HallsList';

const HallsPage = () => {
  const hallsData = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'The Studios of Light',
      location: 'Noida',
      services: 'Photo + Video',
      price: '2000',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Grand Wedding Hall',
      location: 'Mumbai',
      services: 'Venue',
      price: '3000',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Event Masters',
      location: 'Delhi',
      services: 'Photo + Video + Venue',
      price: '5000',
    },
    // Add more hall data here
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter halls based on the search term
  const filteredHalls = hallsData.filter((hall) =>
    hall.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-brown-800 mb-6">Halls</h1>
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search City"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      {/* Pass filtered data to HallsList */}
      <HallsList halls={filteredHalls} />
    </div>
  );
};

export default HallsPage;
