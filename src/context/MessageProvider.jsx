import { useState } from "react";
import Mymessage from "./Mymessage";

// eslint-disable-next-line react/prop-types
function MyProvider({children}){

    const [message , setMessage]= useState('')

    const value = {
        message,
        setMessage
    }

    return(
        <Mymessage.Provider value={value}>
            {children}
        </Mymessage.Provider>

    )

}

export default MyProvider;