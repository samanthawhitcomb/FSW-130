import React from "react"
import ThemeContext from "./themeContext"

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {context => (            
                <footer className={`${context.theme}-theme`} id= "themeSelector">
                    <h2 value ="light">{context === "light" ? "Light" : "Dark"} Theme</h2>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                </footer>)}
                
            
        </ThemeContext.Consumer>

    )    
}


export default Footer