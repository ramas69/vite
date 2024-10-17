import { useState } from "react"
import Palette from "./Palette";
import ViewColor from "./ViewColor";


function Selector() {

    const [color, setColor]= useState('#000000');

  return (
    <>
    <ViewColor color={color} />
    <Palette  color={color} setColor={setColor}/>
    </>

  )
}

export default Selector