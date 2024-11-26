import React from 'react';
import Card from './Card';

const DataList = ({ data, detailPath }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data && data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            id={item.id} // Pass ID
            imageSrc={item.imageSrc}
            title={item.title}
            location={item.location}
            price={item.price}
            rating={item.rating}
            detailPath={detailPath} // Pass detailPath
          />
        ))
      ) : (
        <div className="text-center w-full">No items found</div>
      )}
    </div>
  );
};

export default DataList;
