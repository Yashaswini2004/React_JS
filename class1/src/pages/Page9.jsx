import React,{Component} from "react";
class Page9 extends Component{
    constructor(props){
        super(props)
        this.state={
            qnty:1
        }
    }
    incHandler(val){
       this.setState(
        {
            qnty:this.state.qnty+val
        }
       )
    }
    decHandler(val){
        this.setState({
            qnty:this.state.qnty-val
        })
    }

    render(){
        return (
            <div>
            <button onClick={()=>this.incHandler(1)}>Increment</button>
            <h1>Quantity={this.state.qnty}</h1>
            <button onClick={()=>this.decHandler(1)}>Decrement</button>
            </div>

        )
    }
}
export default Page9;