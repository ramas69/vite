import { useState } from "react";
import { addProduct } from "../../services/product";

function CreateProduct() {

const [name , setName] = useState("");
const [price , setPrice] = useState(0);
const [image , setImage] = useState("");
const [description , setDescription] = useState("");
const [success, setSuccess]= useState(null);
const [error, setError]= useState(null);
const [validationError, setValidationError]= useState(null)


const validationForm = ()=> {
    if ( !name || !image || !description || !price){
        return 'tous les champs sont obligatoires'
    }

   return null;
}


const handleSubmit= async (e) => {
    e.preventDefault();

    const valudationResult = validationForm();
    if (valudationResult) {
        setValidationError(valudationResult);
        setError(null);
        setSuccess(null)
        return;
        }

    try {

        const product = {
            name,
            price,
            image,
            description
        }
        console.log(product);
        
        const saveProduct = await addProduct(product);
        console.log(saveProduct);

        setSuccess(`Produit créé `);
  
        setError(null);
       
        setName("");
        setPrice(0);
        setImage("");
        setDescription("");
        
    } catch (error) {
        console.error(error)
        setError("Erreur lors de la création du produit");
        setSuccess(null)
        setValidationError(null)
    }

   


}

const styles = {
    myBtn :{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 32px",
    }
}


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="form-label">Ajouter Produit</label>
                    <input type="text" value={name} className="form-control" onChange={ (e)=> setName(e.target.value)} placeholder="Nom " />
                    </div>
                    <div className="mb-3">
                    <input type="number" className="form-control" value={price} onChange={ (e)=> setPrice(e.target.value) } placeholder="Prix" />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control" value={image} onChange={ (e)=> setImage(e.target.value)}  placeholder="Url image" />
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control"value={description} onChange={ (e)=> setDescription(e.target.value)}  placeholder="Description" />
                    </div>
                    <button style={styles.myBtn} type="submit"> Ajouter</button>
                </form>

                {success && <div style ={{color:'red'}} >{success}</div>}
                {error && <div >{error}</div>}
                {validationError && <div >{validationError}</div>}
            </div>

        </>
    )
}


export default CreateProduct;