import React, { Component } from 'react';
import one from '../images/one.jpg';
import two from '../images/two.jpeg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';
import six from '../images/six.jpg'
import seven from '../images/seven.jpg'


// import MenuIcon from '@material-ui';

//Total Comment section for client and admin

class Comment extends Component{
    indexval=0;
    render() {
        return (
            <div>
           <TextBox indexval={this.indexval} index={this.props.index}/>
            </div>
        )
    }
}

// Comment text box for posting comments
class TextBox extends Component {
    constructor(){
        super();
        this.state={
            remark:[],
            val:'',
            remarks:{},
            images:[one,two,three,four,five,six,seven],
            names:["Arjhun","Pradeep","Joshua","Aravinth","Nikihl","Gokul","Gowtham"]
        }
    }
    // this will set the remarks(comments) in the remarks state
    componentWillMount(){
        const user=JSON.parse(localStorage.getItem('user')); 
        this.setState({
            remarks:user[this.props.index].remarks
        })
    }
    // this will set the current textbox value in state
    handleChange=(event)=>{
        const val=event.target.value;
        this.setState({
            val:val
        })
    }
    // this will handle the submmit of the comment
    handleSubmit=()=>{
        if(this.state.val!=''){
        this.state.remark.push(this.state.val);
        const user=[...JSON.parse(localStorage.getItem('user'))];
        user[this.props.index].remarks.push(this.state.remark[0]);
        localStorage.setItem('user',JSON.stringify(user));
        this.componentWillMount();
        this.setState({
            remark:[],
            val:''
        })
    }
    }
    // ----to generate index for the image
    randomNumber=(i)=> {
        // console.log(this.indexval);
        let val=i;
        if(val>=6){
            val=Math.floor(Math.random() * Math.floor(6));
        }
        else{
            val++;
        }
        return(
            val
        )
    }
    
    render() {
    return(
    <div className="comments">
            <input className="postBox" placeholder="write your comments here....." type="text" value={this.state.val} onChange={this.handleChange}/>
            <span onClick={this.handleSubmit}><i class="material-icons" style={{  pointerEvents: 'none',marginLeft:'10px',color:'rgb(32, 58, 63)'}}>send</i></span>
            <span  className="comment-btn" data-toggle="collapse" data-target={"#a"+this.props.index}><i style={{pointerEvents: 'none',color:'rgb(32, 58, 63)'}} class="material-icons down-arrow">arrow_drop_down_circle</i></span>
            <div id={"a"+this.props.index} className="collapse">
            <div>
                {this.state.remarks.map((e,i)=>(
                    <p className="card comment-text"><span><img width="25px" height="25px" style={{borderRadius:"100%"}} src={this.state.images[this.randomNumber(i)]}></img><span style={{marginLeft:"10px"}}>{this.state.names[this.randomNumber(i)]}</span></span><hr></hr>{e}</p>
                ))}
            </div>
            </div>
            
          
    </div>
    );
}
}

export default Comment;