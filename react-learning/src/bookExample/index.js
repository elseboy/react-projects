import React from "react";
import { createRoot } from "react-dom/client";

import "./bookExample/index.css";
import { books } from "./bookExample/books";
import Book from "./bookExample/Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);

/**
 * 1: css内嵌样式权重最高 比如上面author的h4，在index.css里面可能会有不起作用，但是内嵌绝对stronger
 * 2: props的两种写法以及遍历
 */
