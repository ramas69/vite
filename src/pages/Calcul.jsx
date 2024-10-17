import ToDoApp from "../components/Taches/ToDoApp"
import FormulaireContact from "../context/FormulaireContact"
import MessageDisplay from "../context/MessageDisplay"
import MessageProvider from "../context/MessageProvider"


function Calcul() {
  return (
    <div>
            <MessageProvider>
                <ToDoApp />
                <MessageDisplay />
                <FormulaireContact />
            </MessageProvider>
        
    </div>
  )
}

export default Calcul