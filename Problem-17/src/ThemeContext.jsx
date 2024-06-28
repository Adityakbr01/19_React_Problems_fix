import { Children, createContext, useState ,useContext} from "react";


export const Themecontext = createContext;

export const ThemeProvider = ({ Children }) => {
  const [isDarkmode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((preview)=>!preview);
  };
  return (
    <Themecontext.Provider value={{ isDarkmode, toggleDarkMode }}>
      {{Children}}
    </Themecontext.Provider>
  );
};


export const UseTheme = () => {

    return useContext(Themecontext);
}
 
