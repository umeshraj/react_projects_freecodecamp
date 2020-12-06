import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* sidebar button */}
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      {/* modal button */}
      <button className="btn">show modal</button>
    </main>
  );
};

export default Home;
