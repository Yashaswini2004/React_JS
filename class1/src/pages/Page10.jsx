import React,{Component} from "react";
class Page10 extends Component{
    constructor(props){
        super(props)
        this.state={
            qty:1
        }
    }
    incHandler(val){
       this.setState={
         qty:this.state.qty+1
       }
    }
    decHandler(val){
        this.setState={
            qty:this.state.qty-1
        }
    }
    render(){
        <div>
            <h2>Quantity={qty}</h2>
            <button onClick={()=>this.incHandler(1)}>Increment</button>
            <button onClick={this.decHandler.bind(this,1)}>Decrement</button>
        </div>
    }
}