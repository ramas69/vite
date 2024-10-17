/* eslint-disable react/prop-types */


function ViewColor({color}) {

    const style = {
        width: '100px',
        height: '100px',
        backgroundColor: color,
        border: '1px solid #000',
        marginTop: '10px',
      };
    

  return (
    <>
    <div style={style}>ViewColor
    
    </div>

     </>
  )
 
}

export default ViewColor