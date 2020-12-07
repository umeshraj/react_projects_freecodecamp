import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const data = useGlobalContext();
  console.log(data);
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
