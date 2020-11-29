import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section className="menu section">
        {/* title */}
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        {/* categories */}
        {/* menu items */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
