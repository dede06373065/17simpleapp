import React, { Component } from 'react';
import CommentAdd from './comment-add';
import CommentList from './comment-list';


export default class App extends Component {
    //因为评论功能在左右component中都有涉及所以放在父组件里面
    // constructor(props){
    //     super(props);
    //     this.state={
    //         comments:[
    //             {username:'Tom',comment:'React is good!'},
    //             {username:'Jack',comment:'React is difficult!'},
    //             {username:'Jen',comment:'I can handle it!'}
    //         ]
    //     }
    // }繁琐的写法
    state={
        comments:[
            {username:'Tom',content:'React is good!'},
            {username:'Jack',content:'React is difficult!'}
        ]
    }//简写


    addComment=(comment)=>{
        const {comments}=this.state;
        comments.unshift(comment);
        //update
        this.setState({comments});
    }
    deleteComment=(index)=>{
        const {comments}=this.state;
        comments.splice(index,1)
        //update
        this.setState({comments});
    }

    render() {
        const {comments}=this.state;
        return (
            <div className=".jumbotron">
                <h1>Please give me some comments about React</h1>
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={comments} deleteComment={this.deleteComment}/>
            </div>

        )
    }
}