/* eslint-disable no-unused-vars */


 
function reducer(taches, action) {

    switch (action.type) {
        case 'ADD_TASK':
            return [...taches, { id: Date.now(), texte: action.texte, complete: false }];
    
        case 'SUPPRIMER':
            return taches.filter((tache) => tache.id !== action.id );

        default:
            throw new Error('Type d\'action inconnu');
    }

 }

 export default reducer;