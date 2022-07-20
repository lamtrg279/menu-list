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
  const [categories, setCategories] = useState();

  return <div className='App'></div>;
}

export default App;
