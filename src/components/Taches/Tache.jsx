/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function Tache({tache, dispatch}) {

const style= {
    // eslint-disable-next-line react/prop-types
    textDecoration: tache.complete ? 'line-through' : 'none',
}
  return (
    <div className="mt-2">
        <li>   <span style={style}>{tache.texte}</span>
        <button onClick={()=> dispatch({type:'SUPPRIMER', id:tache.id})}> X</button>
        </li>
    </div>
  )
}

export default Tache