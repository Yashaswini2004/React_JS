import React from "react";
let x=146.77;
const y=1257.34;
let z="Yashaswini";
let isIt=true;
let users=["Yashaswini","nithin","pavitra","deekshita"]
let student=[
    {
        name:"yashaswini",
        email:"yashu@gmail.com",
        marks:98

    },
    {
        name:"Pavitra",
        email:"pavi@gmail.com",
        marks:98
    },
    {
         name:"Nithin",
        email:"nithi@gmail.com",
        marks:91
    }
]
const Page7=()=>{
    // local variable
    let a=1245;
    let b=35.1234;
    return (
        <div>
            <h2>Variables in arrow function</h2>
            <h3>x={x} and y={y},sum={x+y}</h3>
        <h3>String={z} and {isIt?<p>True</p>:<p>False</p>}</h3>
        {users?.map((item,index)=>{
            return(
                <p key={index}>{item}</p>
            )
        })}
        {student?.map((st,index)=>{
            return (
                <div id={index}>
                    <h2>{st.name}</h2>
                    <h2>{st.email}</h2>
                    <h2>{st.marks}</h2>
                </div>
            )
        })}
        <h2>a={a}</h2>
        <h2>b={b}</h2>
        </div>
    )
}
export default Page7;