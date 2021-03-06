import React from "react";

const {Provider, Consumer} = React.createContext();

class UglyThingsContextProvider extends React.Component {
    state = {
        posts: [],
    }
     newPost= {
        id: 100,
        title: "",
        description: "",
        imgUrl: ""    
    }
    // currentPost =  this.state.posts.find(post => (
    //     post.id === postId ? {id: postId, title: newPostTitle, description: newPostDescription}:{}));

    updatePostValue = (postId, newPostTitle, newPostDescription) => {
        console.log(postId, newPostTitle, newPostDescription)
        this.setState({
            // posts:[...posts],
            editingPost: this.state.posts.find(post => (
                post.id === postId ? {id: postId, title: newPostTitle, description: newPostDescription} : {})
            )}, () => this.setState({
            posts: this.state.posts.map(post => (
                post.id === this.state.editingPost.id ? {title: newPostTitle, description: newPostDescription} : post)
            )}
        ))
    }

    // handleChange = (e) => {
    //     const {name, value} = e.target;

    //     this.setState({[name]: value}, () => console.log(this.newPost));
    // }

    handleClick = (e, title, description, url) => {
        e.preventDefault();

        this.setState((prevState) => ({newPost: {
            id: prevState.posts.length + 1,
            title: title,
            description: description,
            imgUrl: url
        }}), () => this.setState({
            posts: this.state.posts.concat(this.state.newPost)
            })
        );
        console.log(this.state.newPost)
    }


    render() {
        return(
            <Provider value={{
                posts: this.state.posts, 
                newPost: this.state.newPost, 
                handleChange: this.handleChange,
                handleClick: this.handleClick,
                updatePostValue: this.updatePostValue}}>
                    {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsContextProvider, Consumer as UglyThingsContextConsumer};