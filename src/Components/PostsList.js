import React from 'react';
import {Link} from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import {Button, PostContainer} from './partials';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {
    state = {
        targetIDs: [],
        showID: [],
    };

    componentDidMount () {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);
    };

    handleOnClickButton = (e) => {
        let buttonId = e.target.getAttribute('id');
        let newButtonIds = [...this.state.showID];

        if (newButtonIds.includes(buttonId)) {
            newButtonIds = newButtonIds.filter(e => e !== buttonId)
        } else {
          newButtonIds.push(buttonId);
        }
        this.setState({showID: newButtonIds});

        let targetId = parseInt(e.target.previousSibling.getAttribute('id'));
        let newList = [...this.state.targetIDs];
        
        if (newList.includes(targetId)) {
          newList = newList.filter(e => e !== targetId)
        } else {
            newList.push(targetId);
        }
        this.setState({targetIDs: newList});
    };

    render() {

        return (                                                                                                                                                          
            <div>

                {this.props.posts.map(post=> {

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
                            <Button button_id={`button_${id}`} class = {`show-more-button ${this.state.showID.includes(`button_${id}`) ? 'clicked': ''}` } 
                                handleOnClickButton = {this.handleOnClickButton}
                                childrenText = {
                                   <span> Show Comments </span> 
                                }
                                childrenSvg = {
                                    <span className= {`show-more-span ${this.state.showID.includes(`button_${id}`) ? 'up-svg': 'down-svg'}` }><MdKeyboardArrowDown/></span>
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