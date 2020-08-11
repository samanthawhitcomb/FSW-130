import React from "react";
const {Provider, Consumer} = React.createContext()

class ThemeProviderTop extends Component {
    state = {
        theme: "light"
    }
    
    toggleTheme = (themeValue) => {
        // let themeValue = document.getElementById("themeSelector").value;
        console.log(this.state.theme)
        this.setState(prevState => {
            return {
                theme: prevState.theme  === "dark" ? "light" : "dark"
            }
        })
    }
    render(){
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
            {this.props.children}
             </Provider>

        )    
    }
}

export {ThemeProviderTop, Consumer as ThemeConsumerTop} 