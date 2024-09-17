import { useState } from "react";

const User = (props) => {
    const [count1] = useState(1);
    const [count2] = useState(2);
    return(
        
        <div className="user">
            <h2>Count1 : {count1}</h2>
            <h2>Count2 : {count1}</h2>
            <h3>Name : {props.name}</h3>
            <h4>Location : {props.location}</h4>
            <h4>Contact : abc@gmail.com</h4>
        </div>
    )
}

export default User;