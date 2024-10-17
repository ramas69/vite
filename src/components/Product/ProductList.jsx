import { useEffect } from "react";

function ProductList() {

    useEffect(() => {
 

        // Fonction de nettoyage pour le démontage
        return () => {
            console.log('ProductList démonté dans Product liste');
        };
    }, []);
    return (
        <div>
        <p>test produit</p>
        </div>
    )
}

export default ProductList;



