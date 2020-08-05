import React from "react"
import {ThemeConsumerTop} from "./themeContextTop"

function Header(props) {
    return (
        <ThemeConsumerTop>
            {({theme}) =>             
              { console.log(theme)
                  return( <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>)}}
        </ThemeConsumerTop>

    )    
}


export default Header