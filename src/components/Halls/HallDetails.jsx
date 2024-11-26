import React from 'react';
import DetailsPage from '../DisplayItems/DetailsPage';
import hallsData from '../../assets/data/hall.json';

const HallDetails = () => {
  return <DetailsPage data={hallsData} itemType="Hall" />;
};

export default HallDetails;
