import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handleClick=()=>{
        const {comment, deleteComment,index}=this.props
        //tip
        if(window.confirm(`are you sure about${comment.username}`)){
            deleteComment(index)
            }
        }
        //ensure delete
    
    render() {
        const { comment } = this.props
        return (
            <li ><h5>{comment.username}said:</h5>
                <span>{comment.content} </span>
                <button onClick={this.handleClick}>delete</button>
            </li>
        )
    }
}