import { getProducts } from "../../services/product";
import ProductCard from "../Product/ProductCard";
import { useState, useEffect, useMemo} from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const products = await getProducts(searchTerm);
          setResults(products);
  
      } catch (error) {
        console.error(error);
      }
    };

    searchProducts();
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return results; // Si searchTerm est vide, renvoie tous les produits
    }
    return results.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, results]);
  return (
    <>
      <form action="">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="row">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default SearchBar;
