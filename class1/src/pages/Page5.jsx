import React,{Component} from "react";
let x=12;
const y=25.66;
class Page5 extends Component{
    constructor(props){
        super(props)
        this.p=12345,7890;
        this.q=523.34567;
    }
    render(){
        let a=256;
            const b=152.99;
        return (
             <div>
                <h3>Variables and data binding class Component</h3>
                <h4>x={x}</h4>
                <h4>y={y}</h4>
                <hr />
                <h4>a={a}</h4>
                <h4>b={b}</h4>
                <h4>sum={a+b}</h4>
                <hr />
                <h4>p={this.p}</h4>
                <h4>q={this.q}</h4>
             </div>
 
        )
    }
}
export default Page5;