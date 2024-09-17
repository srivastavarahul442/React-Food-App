import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count1:1,
            count2:2
        }
    }
  render() {
    return (
      <div className="user">
        <h2>Count1 : {this.state.count1}</h2>
        <h2>Count2 : {this.state.count2}</h2>
        <h3>Name : {this.props.name}</h3>
        <h4>Location : {this.props.location}</h4>
        <h4>Contact : abc@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
