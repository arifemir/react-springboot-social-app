import React from "react";
import { changeLanguage } from "../api/apiCalls";
import { withTranslation } from "react-i18next";

const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };
  return (
    <div className="container">
      <img
        alt="tr flag"
        src="https://www.countryflags.io/tr/flat/24.png"
        onClick={() => onChangeLanguage("tr")}
        style={{ cursor: "pointer" }}
      />
      <img
        alt="us flag"
        src="https://www.countryflags.io/us/flat/24.png"
        onClick={() => onChangeLanguage("en")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default withTranslation()(LanguageSelector);
