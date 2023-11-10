import React, { useState } from "react";
import userContext from "./userContext";


const UserConextProvider = ({children}) =>{
    const[user,setUser] = useState(null);
    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )


}

export default UserConextProvider