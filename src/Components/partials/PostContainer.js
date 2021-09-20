import React from 'react';
import Comments from './Comments';


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
            <p className="text-capitalize">{this.props.body}</p>
            <div className= {`comments-list ${this.props.clickedId.includes(this.props.postId) ? 'show': ''}` }> 
                {this.props.comments.map((data, i) => {
                return <Comments key={i} comments={data.body}  propsconsole = {this.props.propsconsole} propsname={"Comments"}/>
                })}
            </div>
        </div>
    )
  }
}