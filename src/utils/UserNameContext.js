import { createContext } from "react";

const UserNameContext = createContext({
    loggedInUser:"Default Name"
})

export default UserNameContext;