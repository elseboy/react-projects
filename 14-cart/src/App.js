import React from "react";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
