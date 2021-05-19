import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CommentItem from './comment-item'

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }// 简单写法给组件类指定属性
    render() {
        const { comments, deleteComment } = this.props
        const display=comments.length===0?'block':'none'
        return (
            <div className="col-md-5 comment-list">
                <h4>Comment Reply</h4>
                <h3 style={{display}}>There is no reply here!</h3>
                <ul className="list-group">
                    {
                        comments.map((i, index) => <CommentItem comment={i} key={index} deleteComment={deleteComment} index={index} />)}
                </ul>
            </div>
        )
    }
}
// CommentList.propTypes={
//     comments:PropTypes.array.isRequired
// }复杂写法

