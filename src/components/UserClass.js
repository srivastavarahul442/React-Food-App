import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:""
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/srivastavarahul442");
        const jsondata = await data.json();
        console.log(jsondata.name)
        this.setState({
            userInfo:jsondata
        })
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    const {name,location,company,avatar_url} = this.state.userInfo;
    return (
      <div className="user">
        <img alt="img" src="https://avatars.githubusercontent.com/u/118062330?v=4" />
        <h3>Name : {name}</h3>
        <h4>Location : {location}</h4>
        <h4>Company : {company}</h4>
      </div>
    );
  }
}

export default UserClass;
