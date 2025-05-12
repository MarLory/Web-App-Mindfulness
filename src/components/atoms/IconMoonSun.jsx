import { useTheme } from "../../context/ThemeProvider";


export default function IconMoonSun ({className = "" }){
    const { isDarkMode, toggleTheme } = useTheme();
    
    return (

        <>
        <button onClick={toggleTheme} className={className}>
            {isDarkMode ? (
        <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : ( 
         <i className="fa-solid fa-moon"></i>
    )}
        </button>
        </>
    )
}

