import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../DisplayItems/Card';
import hallsData from '../../assets/data/hall.json';
import photographersData from '../../assets/data/photo.json';

export default function WeddingServices() {
  const navigate = useNavigate();

  const handleHallClick = () => {
    navigate('/halls'); 
  };

  const handlePhotographerClick = () => {
    navigate('/photographers');
  };

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto shadow-lg w-full">
      {/* Organize Your Wedding Section */}
      <h2 className="text-2xl md:text-3xl text-center font-serif italic text-primary mb-12">
        Organize Your Wedding
      </h2>

      {/* Hall Section */}
      <section className="mb-12 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-serif italic text-primary mb-6">Halls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-4">
          {hallsData.slice(0, 3).map((hall) => (
            <div
              key={hall.id}
              onClick={handleHallClick}
              className="cursor-pointer"
            >
              <Card
                imageSrc={hall.imageSrc}
                title={hall.title}
                location={hall.location}
                price={hall.price}
                rating={hall.rating}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Photographer Section */}
      <section className="mb-12 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-serif italic text-primary mb-6">Photographers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-4">
          {photographersData.slice(0, 3).map((photographer) => (
            <div
              key={photographer.id}
              onClick={handlePhotographerClick}
              className="cursor-pointer"
            >
              <Card
                imageSrc={photographer.imageSrc}
                title={photographer.name}
                location={photographer.location}
                price={photographer.price}
                rating={photographer.rating}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
