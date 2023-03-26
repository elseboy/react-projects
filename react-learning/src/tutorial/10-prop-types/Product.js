import React from "react";
import propTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <h4>single product</h4>
      <img src={url || defaultImage} alt={name || "default name"}></img>
      <h4>{name}</h4>
      <h4>${price || 3.99}</h4>
    </article>
  );
};
Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
};

export default Product;
