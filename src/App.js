import "./App.css";
import React, { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";
import logo from "./logo.png";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <img src={logo} alt='logo' className='logo' />
          <h2>Menu List</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
      </section>
    </main>
  );
}

export default App;
