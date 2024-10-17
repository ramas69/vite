import { useContext } from "react"

import Mymessage from "./Mymessage"


function MessageDisplay() {

    const {message} = useContext(Mymessage);
    if (!message) return null;

  return (
    <div>
     <p>{message}</p>
    </div>
  )
}

export default MessageDisplay