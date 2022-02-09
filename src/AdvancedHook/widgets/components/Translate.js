// translate API Key
//: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Convert from "./Convert";
import DropDowmFiled from "./DropDownField";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="ui from">
      <div className="field">
        <label>Enter Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <DropDowmFiled
        label="Selecte Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <div className="ui header">Output</div>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
