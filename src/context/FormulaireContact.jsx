import { useState, useContext } from 'react';
import Mymessage from './Mymessage';

// eslint-disable-next-line react/prop-types, no-unused-vars
function FormulaireContact() {

    const [nom, setNom] = useState('');
    const { setMessage } = useContext(Mymessage);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (nom.trim() !== '') {
        setMessage(`Merci pour votre message, ${nom} !`);
        setNom('');
      } else {
        setMessage('Veuillez entrer votre nom.');
      }
    };
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
          />
          <button type="submit">Envoyer</button>
        </form>
      );
    }

export default FormulaireContact