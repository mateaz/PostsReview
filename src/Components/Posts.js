import React from 'react';
import PostList from './PostsList';
import {Search, Loader} from './partials';

export default class Posts extends React.Component  {
    state = {
        initPosts: [],
        posts: [],
        users: [],
        searchedUser: [],
        comments: [],
        searchedValue: [],
        isLoading: true,
    };

    componentDidMount() {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then (response => response.json())
            .then(data => {
                this.setState({initPosts: data, isLoading:false})
                this.setState({posts: data})
            })
            .catch (error => console.log(error));


        fetch ('https://jsonplaceholder.typicode.com/users')
            .then (response => response.json())
            .then (data => {
                this.setState({users: data})
            })
            .catch (error => console.log(error));

        fetch ('https://jsonplaceholder.typicode.com/comments')
            .then (response => response.json())
            .then (data => {
                this.setState({comments: data})
            })
            .catch (error => console.log(error));
    };

    searchByUserData = (e) => {

        e.preventDefault();
        let value = e.target.value;

        this.setState({searchedValue: value});
       
        const filteredUser = this.state.users.filter((item) => {
           return item.name.toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1;
        });   

        this.setState({searchedUser: filteredUser})

        const postsFiltered = this.state.initPosts.filter((post) => {
            return filteredUser.some((user) => {
              return user.id === post.userId;
            });
        });

        this.setState({posts: postsFiltered})  
    };

    render() {

        return(
            <div>
                <Search 
                    value={this.state.searchedValue} 
                    onChange={(e) => this.searchByUserData(e)}  
                    propsconsole = {this.props.propsconsole} 
                    propsname={"Search"}
                />

                {this.state.isLoading ? 
                    <Loader 
                        propsconsole = {this.props.propsconsole} 
                        propsname={"Loader"}/> : 
                    <PostList
                        propsconsole = {this.props.propsconsole} 
                        propsname={"PostList"}
                        name = {this.props.text}
                        posts = {!this.state.searchedUser ? this.state.searchedUser : this.state.posts}
                        users = {this.state.users}
                        comments = {this.state.comments}
                    />}
            </div>   
        )
    }
}