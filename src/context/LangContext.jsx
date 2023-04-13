import { createContext, useEffect, useState } from "react";
import { arabic, english } from "../container/LangText";
export const langContext = createContext({
  langState: false,
  setLangState: () => null,
});

export const LangProvider = ({ children }) => {
  // false => AR & True => ENG
  const [langState, setLangState] = useState(
    () => JSON.parse(localStorage.getItem("languageState")) || false
  );

  // Header Text
  const [langText, setLangText] = useState(arabic);

  useEffect(() => {
    localStorage.setItem("languageState", JSON.stringify(langState));
    if (langState === false) {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, [langState]);

  // Header Text
  useEffect(() => {
    if (langState === false) {
      setLangText(arabic);
    } else {
      setLangText(english);
    }
  }, [langState]);

  const value = { langState, setLangState, langText };
  return <langContext.Provider value={value}>{children}</langContext.Provider>;
};

export default LangProvider;
