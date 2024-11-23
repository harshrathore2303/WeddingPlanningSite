import React, { useState } from 'react';
import HallsList from './HallsList';

const HallsPage = () => {
  const hallsData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    imageSrc: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: `Hall Name ${index + 1}`,
    location: index % 2 === 0 ? 'Noida' : 'Mumbai',
    services: 'Photo + Video',
    price: `${2000 + index * 100} per day`,
  }));

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const hallsPerPage = 9; // Max halls to display per page

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter halls based on the search term
  const filteredHalls = hallsData.filter((hall) =>
    hall.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastHall = currentPage * hallsPerPage;
  const indexOfFirstHall = indexOfLastHall - hallsPerPage;
  const currentHalls = filteredHalls.slice(indexOfFirstHall, indexOfLastHall);

  // Handle page navigation
  const totalPages = Math.ceil(filteredHalls.length / hallsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto shadow-lg ">
        <div className='flex justify-between '>
      <h1 className="text-3xl font-bold text-brown-800 mb-6">Halls</h1>
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search City"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      </div>
      {/* Pass filtered and paginated data to HallsList */}
      <HallsList halls={currentHalls} />

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HallsPage;
