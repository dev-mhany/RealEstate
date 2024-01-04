import React from "react";
import { useNavigate } from "react-router-dom";

const LangSwitcher = (props) => {
  const navigate = useNavigate();

  const switchLang = function (lang) {
    navigate(lang);
    return false;
  };

  let { langs, currentLang } = props;
  let lang = currentLang !== "en" ? langs["en"] : langs["ar"];

  return (
    // Using a button instead of an anchor for better accessibility
    <button
      onClick={() => switchLang(lang)}
      style={{ textDecoration: "underline" }}
    >
      {lang.text}
    </button>
  );
};

export default LangSwitcher;
