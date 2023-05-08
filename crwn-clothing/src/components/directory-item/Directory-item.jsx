import React from 'react';


import './directory-item.scss';

const DirectoryItem = ({ category: { id, imageUrl, title } }) => {
  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        {/* <Link to={`shop/${title}`}> */}
        <h2 style={{ textTransform: 'uppercase' }}>{title}</h2>
        <p>Shop Now</p>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default DirectoryItem;
