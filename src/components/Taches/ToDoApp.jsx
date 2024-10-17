import reducer from "./reducer";
import Tache from "./Tache"
import  { useReducer, useState } from 'react';

function ToDoApp() {
    const [texte, setTexte]= useState('');
    const [taches, dispatch ]= useReducer(reducer, []);

console.log( texte);


const handleSubmit=(e)=> {
    e.preventDefault();
    if(texte.trim !== ''){
        dispatch({type:'ADD_TASK', texte});
        setTexte('')
    }
  
  

}


  return (
    <div className="m-2">
        <form action="" onSubmit={handleSubmit} >
        <input
          type="text"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit" >Ajouter</button>
        </form>
        

        <ul>
        {taches.map(tache => (<Tache key={tache.id} tache={tache} dispatch={dispatch}  />))}
        </ul>
        


    </div>
  )
}

export default ToDoApp