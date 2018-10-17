import React, { Component } from 'react';

// Like component
class LikeButton extends Component{
    constructor(props){
        super(props);
        this.state = {
          likes: ''
        };
      }

      // to update likes in localstorage
      updateLikes = () => {
        const index=this.props.index;
        const user=[...JSON.parse(localStorage.getItem('user'))];
        const likes=user[index].likes+1;
        user[index].likes=likes;
        localStorage.setItem('user',JSON.stringify(user));
        this.setState({
          likes:user[index].likes
        })
      }
      // To retrive number of likes from local storage when ever the page loads
      componentWillMount(){
        const user=JSON.parse(localStorage.getItem('user'));
        const likes=user[this.props.index].likes;
        this.setState({
          likes:likes
        })
      }
    
      render(){
        return(
          <div style={{float:'left'}}>
            <p style={{fontSize:'23px',float:'left', marginLeft:'75%', marginTop:'3%'}}onClick={this.updateLikes}  className="thumbs-btn fa fa-thumbs-up"></p>
            <p style={{marginLeft:'82%',marginTop:'3%'}} className="like">{this.state.likes}</p>
          </div>
        );
      }
}
export default LikeButton;