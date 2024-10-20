import React from 'react';
import HallCard from './HallCard';

const HallsList = ({ halls }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {halls.length > 0 ? (
        halls.map((hall) => (
          <HallCard
            key={hall.id}
            imageSrc={hall.imageSrc}
            title={hall.title}
            location={hall.location}
            services={hall.services}
            price={hall.price}
          />
        ))
      ) : (
        <div className="text-center w-full">No halls found</div>
      )}
    </div>
  );
};

export default HallsList;
