import React, { useCallback,  useState } from "react";

interface SaveUserTokenArg {
    access: string,
    refresh: string,
}

interface IAppContext {
    theme: string;
    toggleTheme: () => void;
    userToken: string;
    saveUserToken: (tokens: SaveUserTokenArg) => void;
    clearToken: () => void
}

const initialContext = {
    theme: 'light',
    toggleTheme: () => {},
    userToken: '',
    saveUserToken: () => {},
    clearToken: () => {},
}

const AppContext = React.createContext<IAppContext>(initialContext);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userToken, setUserToken] = useState<string>(localStorage.getItem('access') || '');
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || "light",
      );
    
    const toggleTheme = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light";
    
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }, [theme]);

    const saveUserToken = (tokens: SaveUserTokenArg) => {
        setUserToken(tokens.access);
    }

    const clearToken = () => {
        setUserToken('');
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

    }

    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme,
            userToken,
            saveUserToken,
            clearToken
        }}>
            {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = React.useContext(AppContext);
    
    return context;
  };

export default AppContextProvider;