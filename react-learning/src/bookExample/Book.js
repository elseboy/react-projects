import React from 'react'

const Book = ({ img, title, author, children }) => {
    // const Book = (props) => {
    // const { img, title, author } = props;
    const complexExample = (author) => {
        console.log(author);
    };
    return (
        <article className="book">
            <img src={img} width="100" height="100" alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={() => complexExample(author)}>
                more complex example
            </button>
        </article>
    );
};

export default Book