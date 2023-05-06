import React from 'react';
import './directory.scss';
import DirectoryItem from '../directory-item/Directory-item';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
