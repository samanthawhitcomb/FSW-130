import React from "react"
import {ThemeConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (            
                <footer className={`${context.theme}-theme`} id= "themeSelector">
                    <h2 value ="light">{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                </footer>)}
                
            
        </ThemeConsumer>

    )    
}


export default Footer