import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class MoviesContextProvider extends Component {
    state = {
        movies: [
            "Detachment",
            "Horrible Bosses",
            "interMission",
            "October Sky",
            "Blackfish",
            "Hotel Transylvania",
            "Moon",
            "The Strangers"
        ],
        newMovie: ""
    }

    handleChange = (e) => {
    e.preventDefault();
        console.log(this.state.movies)
        this.setState({
            newMovie: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            movies: this.state.movies.concat(this.state.newMovie)
        }, () => this.setState({newMovie: ""})
        )
    }

    render() {
        return(
            
            <Provider value={{movies: this.state.movies, newMovie: this.state.newMovie, handleClick: this.handleClick, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {MoviesContextProvider, Consumer as MoviesContextConsumer};