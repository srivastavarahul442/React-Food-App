import UserNameContext from "../utils/UserNameContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
          
    }

    render(){
        return(
            <div>
                <h1>About</h1>
                <UserNameContext.Consumer>
                    {
                        (data)=>console.log(data)
                    }
                </UserNameContext.Consumer>
                <h3>This is The About us page</h3>
                {/* <User name={"Rahul"} location="Bihar"/> */}
    
                <UserClass name={"Mithu"} location="Patna"/>
                
            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h3>This is The About us page</h3>
//             {/* <User name={"Rahul"} location="Bihar"/> */}

//             <UserClass name={"Mithu"} location="Patna"/>
//         </div>
//     )
// }

export default About;