import React from 'react';
import {Link} from 'react-router-dom';
import {PostContainer, Loader} from './partials';
import PropTypes from 'prop-types';

export default class SinglePost extends React.Component {
    state = {
        post: [],
        users: [],
        comments: [],
        targetIDs: [],
        isLoading: true
    };


    componentDidMount() {
        const post_id = this.props.match.params.id;

        console.log(`${this.props.propsconsole} ${this.props.propsname}`)

        fetch (`https://jsonplaceholder.typicode.com/posts/${post_id}`)
            .then (response => response.json())
            .then (data => {
                this.setState({post: data, isLoading:false})
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
    render () {
      return(
            <div>
               
                <Link className="link-back-to" to="/posts">Back To Index</Link>
                {this.state.isLoading ? 
                    <Loader 
                        propsconsole = {this.props.propsconsole} 
                        propsname={"Loader"}/> : 
                    (<div className="posts-div singlepost">
                    <PostContainer 
                        postId = {this.state.post.id}
                        body = {this.state.post.body}
                        title = {this.state.post.title}
                        user={this.state.users.filter((u) => u.id === this.state.post.userId)}
                        comments = {this.state.comments.filter((u) => u.postId === this.state.post.id)}
                        clickedId = {[this.state.post.id]}
                        propsconsole = {this.props.propsconsole} 
                        propsname={"PostContainer"}
                    />
                </div>)
                }
                
            </div>
      )
    }
};

SinglePost.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string,
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};