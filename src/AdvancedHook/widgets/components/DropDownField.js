import React, { useState, useEffect, useRef } from "react";

const DropDownField = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    window.document.body.addEventListener("click", onBodyClick);
    return () => {
      window.document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const returnOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="filed">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {returnOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownField;
