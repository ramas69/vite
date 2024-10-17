import { useState, useEffect } from "react";
import { getProducts } from "../../services/product";
import ProductCard from "./ProductCard"

function ProductApi() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
                setLoading(false); 
                console.log('Produits', productsData);
            } catch (error) {
                console.error(error);
                setLoading(false); 
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Chargement des produits...</div>;

    return (
        <>
            <div className="row">
                    {fetures && products.map((product) => (
                         <ProductCard product={product} key={product.id} />
                    ))}
              
            </div>
        </>
    );
}

export default ProductApi;
