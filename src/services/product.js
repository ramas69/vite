import axios from "axios";


const API_URL = "http://localhost:3000/products";

export const getProducts = async ()=> {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (error) {
        console.error(" Impossible", error);
        
    }
}

export const searchProduct = async (term)=> {
    const response = await axios.get(API_URL, term);
    return response.data;

}

export const addProduct = async (product) => {

    try {
        const response = await axios.post(API_URL, product);
        return response.data;

    } catch (error) {
        console.error(" Impossible", error);
    }

}