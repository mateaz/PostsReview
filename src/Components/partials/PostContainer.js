import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';

export default class PostContainer extends React.Component {

  componentDidMount() {
    console.log(`${this.props.propsconsole} ${this.props.propsname}`);
  }

  render() {
   

    return (
        <div className="post-container">
           {this.props.user.map((data, i) => {
                return <span key={i}>{data.name}</span>
            })}
            <h3 className="posts-title">{this.props.title}</h3>
            <p className="text-capitalize post-body">{this.props.body}</p>
            <div className= {`comments-list ${this.props.clickedId.includes(this.props.postId) ? 'show': ''}` }> 
                {this.props.comments.map((data, i) => {
                return <Comments key={i} comments={data.body}  propsconsole = {this.props.propsconsole} propsname={"Comments"}/>
                })}
            </div>
        </div>
    )
  }
};

PostContainer.propTypes={
  propsconsole: PropTypes.string, 
  propsname: PropTypes.string,
  user: PropTypes.array,
  title: PropTypes.string, 
  body: PropTypes.string, 
  clickedId: PropTypes.array, 
  postId: PropTypes.number, 
  comments: PropTypes.array,
};