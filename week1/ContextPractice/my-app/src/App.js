import React from "react"
import Header from "./Header"
import Button from "./Button"
import Footer from "./Footer"
import { ThemeProvider } from "./themeContext"
import { ThemeProviderTop } from "./themeContextTop"

 

function App() {
    return (
        <div>
                 
            <ThemeProviderTop>
                <Header />
                <Button />
            </ThemeProviderTop>
            <ThemeProvider>
            
            
                <Footer />
            </ThemeProvider>
           
        </div>
    )
}

export default App