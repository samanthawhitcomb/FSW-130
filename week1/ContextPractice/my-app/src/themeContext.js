import React, { Component } from "react"
const ThemeContext = React.createContext()

class ThemeContext extends Component {
    state = {
        theme: "light"
    }
    toggleTheme = () => {
        let themeValue = document.getElementById("themeSelector").value;

        this.setState(prevState => {
            return {
                theme: themeValue
            }
        })
    }
    render(){
        return (
            <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
            {this.props.children}
             </ThemeContext.Provider>

        )    
    }
}

export default ThemeContext