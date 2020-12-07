import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const data = useContext(AppContext);
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
