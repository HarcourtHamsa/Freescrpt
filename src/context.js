import React, { useState, createContext } from "react"

export const AppContext = createContext()

function AppContextProvider({ children }) {
    const [theme, setTheme] = useState("light")

    function changeTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <AppContext.Provider value={{ theme, changeTheme }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider