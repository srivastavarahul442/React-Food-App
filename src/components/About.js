import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h3>This is The About us page</h3>
            <User name={"Rahul"} location="Bihar"/>

            <UserClass name={"Mithu"} location="Patna"/>
        </div>
    )
}

export default About;