import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {
    static propTypes={
        addComment:PropTypes.func.isRequired
    }

    state={
        username:'',
        content:''
    }

    handleSubmit=()=>{
        //收集数据并封装为comment对象
        const comment=this.state
        //更新状态
        this.props.addComment(comment)
        //清除输入数据
        this.setState({
            username:'',
            content:''
        })

    }//利用箭头函数替代了bind（）；
    handleNameChange=(event)=>{
        const username=event.target.value;
        this.setState({username});
    }
    handleContentChange=(event)=>{
        const content=event.target.value;
        this.setState({content});
    }
    render() {
        const {username, content}=this.state
        return (
            <div className="col-md-5 comment-add">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label form="inputEmail3" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="username" value={username} onChange={this.handleNameChange}/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Comment</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="3" placeholder="comments" value={content} onChange={this.handleContentChange}></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>submit</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

}