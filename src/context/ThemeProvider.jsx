import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);


export default function ThemeProvider ({children}) {

    const [isDarkMode, setIsDarkMode] = useState(false);

// Applica/rimuove la classe dark su <html>
useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}



