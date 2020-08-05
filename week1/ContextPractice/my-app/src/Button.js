import React from "react"
import {ThemeConsumerTop} from "./themeContextTop"

function Button(props) {
    return (
      <ThemeConsumerTop>
        {({ theme, toggleTheme }) => {
          console.log(theme)
          console.log(toggleTheme)
          return (
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
              className={`${theme}-theme`}
            >
              Switch Theme
            </button>
          )
        }}
      </ThemeConsumerTop>
    );
    }

export default Button