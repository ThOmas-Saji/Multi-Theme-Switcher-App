import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'theme1',
    setTheme: () => { }
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        return (localStorage.getItem("theme") as ThemeType) || 'theme1';
    })

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);