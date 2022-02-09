import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import DropDownField from "./components/DropDownField";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const colorOptions = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "The color Blur", value: "blue" },
];

const Widgets = () => {
  const [selected, setSelected] = useState(colorOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  const items = [
    {
      title: "What is React?",
      content: "React if powerfool libriry",
    },
    {
      title: "Why use React?",
      content: "React is a favorite libriry",
    },
    {
      title: "How do you use React?",
      content: "You use React by createing components",
    },
  ];

  return (
    <div className="">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
        {showDropdown && (
          <DropDownField
            label="Select a Color"
            selected={selected}
            onSelectedChange={setSelected}
            options={colorOptions}
          />
        )}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <div className="ui grid container"> */}
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <DropDownField
        label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={colorOptions}
        />
      )} */}
      {/* <Translate /> */}
    </div>
  );
};

export default Widgets;
