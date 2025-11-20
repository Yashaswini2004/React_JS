import React,{Component} from "react";
let x=12;
const y=25.66;
const colors=["red","blue","pink"];
let users=[
    {
        id:1,
        name:"john",
        email:"john@gmail.com",
        age:90,
        address:{
            city:"bangalore"
        }
    },
     {
        id:2,
        name:"yashu",
        email:"yashaswini@gmail.com",
        age:21,
        address:{
            city:"tumkur"
        }
    },
     {
        id:3,
        name:"pavitra",
        email:"pavitra@gmail.com",
        age:22,
        address:{
            city:"mangalore"
        }
    },
]
class Page5 extends Component{
    constructor(props){
        super(props)
        this.p=12345,7890;
        this.q=523.34567;
        
    }
     clickHandler(){
                alert("Button clicked");
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
                <hr/>
                <div>
                    {colors?.map(function(item,index){
                        return(
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                <hr />
                <div>
                    {users.map((user,index)=>{
                        return (
                            <div key={user.id}>
                                <h2>Name={user.name}</h2>
                                <p>email={user.email}</p>
                                <p>age={user.age}</p>
                                <p>city={user.address.city}</p>
                            </div>
                        )
                    })}
                </div>
                <button onClick={this.clickHandler}>click me</button>
             </div>
 
        )
    }
}
export default Page5;