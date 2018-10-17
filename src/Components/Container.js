import React, { Component } from 'react';
import LikeButton from './LikeButton'
import Comment from './comment'

// Component to display the all messages to make reuse in client and admin
class Container extends Component {
    constructor(props){
        super(props);
        this.state={
          allPost:[]
        }
      }
      componentWillMount(){
        if(localStorage.getItem('user')==null){
          const arr=[];
        localStorage.setItem('user', JSON.stringify(arr));
        }
        else{
        this.retriveData();
        }
      }
      // retrive the data from local storage and set it in the state
      retriveData=()=>{
        const item=localStorage.getItem('user');
        const items=JSON.parse(item);
        this.setState({
          allPost:items
        })
      }
    render(){
        return(
            <div className="container cont">
                {
                    this.state.allPost.map((e,i)=>(
                    <div style={{overflow:''}} className="card" key={i}>
                    <h3 style={{marginLeft:'5%',position:'auto'}}>{e.comment}<br></br><img className="image" width="65%" height="42%" src={e.image} alt=""/></h3>
                    <Comment index={i} style={{float:'left'}}></Comment>
                    <LikeButton likes={e.likes} index={i}/>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default Container;