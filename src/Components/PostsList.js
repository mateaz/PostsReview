import React from 'react';
import {Link} from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {Button, PostContainer} from './partials';
import PropTypes from 'prop-types';


export default class PostList extends React.Component {
    state = {
        targetIDs: [],
        show: false
    };

    componentDidMount () {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);
    };

    handleOnClickButton = (e) => {
        this.setState({show: !this.state.show});

        let targetID = parseInt(e.target.previousSibling.getAttribute('id'));
        let newList = [...this.state.targetIDs];
        
        if (newList.includes(targetID)) {
          newList = newList.filter(e => e !== targetID)
        } else {
            newList.push(targetID);
        }
          this.setState({targetIDs: newList});
    };

    render() {

        return (                                                                                                                                                          
            <div>

                {this.props.posts.map((post, i)=> {

                    const { userId } = post;
                    const { id } = post;
                    const { body } = post;
                    const { title } = post;

                    return (
                        <div key={id} className="posts-div">
                            <Link to={`/post/${id}`} id={id} >
                                <PostContainer 
                                    postId = {id}
                                    body = {body}
                                    title = {title}
                                    user={this.props.users.filter((u) => u.id === userId)}
                                    comments = {this.props.comments.filter((u) => u.postId === id)}
                                    clickedId = {this.state.targetIDs}
                                    propsconsole = {this.props.propsconsole} 
                                    propsname={"PostContainer"}
                                />
                            </Link>
                            <Button class = {`show-more-button ${this.state.show ? 'clicked': ''}` } 
                                handleOnClickButton = {this.handleOnClickButton}
                                childrenText = {
                                   <span> Show Comments </span> 
                                }
                                childrenSvg = {
                                    <span className= {`show-more-span ${this.state.show ? 'up-svg': 'down-svg'}` }><IoIosArrowDropdownCircle/></span>
                                }
                                propsconsole = {this.props.propsconsole} 
                                propsname={"Button"}
                            />
                        </div>
                    )
                })}
            </div>
        )}
};

PostList.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string,
    posts: PropTypes.array,
    user: PropTypes.array,
    comments: PropTypes.array
};