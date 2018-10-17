import React, { Component } from 'react';
// handle the admin posts
class Post extends Component{
    constructor(){
        super();
        this.state={
            allPost:[],
            post:{
            comment:'',
            image:'',
            likes:0,
            remarks:[]
            },
        }
    }
    // adding the comments to state
    handleChange = (event) =>{
        const post= {...this.state.post};
        post.comment=event.target.value;
        this.setState({
            post:post
        })
    }
    // this will read image and store in localstorage
    readImage(){
        const reader=new FileReader();
        const self = this;
        reader.onload=function(){
            self.state.post.image=reader.result;
        }
        reader.readAsDataURL(document.getElementById('image').files[0]);
    }
    // this will check and submit the post(image or text)
    handleSubmit= (event) =>{
        const allPost=[...JSON.parse(localStorage.getItem("user"))]
        if(this.state.post.comment.length>0||this.state.post.image.length>0){
        allPost.push(this.state.post);
        localStorage.setItem('user', JSON.stringify(allPost));
        }
        else{
            alert("post something...");
        }
    }
   
    render(){
        return(
        <div className="post">
            <form className="comment-form form-group" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <span className="input-group-addon">Comment</span>
              <input type="text" className="textBox" onChange={this.handleChange} placeholder="Say something..." />
              <input type="file" name="myImage" id="image" onChange={()=>this.readImage()} className="btn btn-primary file-btn"  accept="image/x-png,image/gif,image/jpeg" />
              <input type="submit" value="Post" className="btn btn-primary post-btn" />
            </div>
          </form>
         </div>
        )
    }
}

export default Post;