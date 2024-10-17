import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Palette({color, setColor}) {

    const handleChange = (e)=> {
        setColor(e.target.value)
    }


  return (
    <div>
    <input type="color" onChange={handleChange} value={color} />
      test
    </div>
  )
}



export default Palette