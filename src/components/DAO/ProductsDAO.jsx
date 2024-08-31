import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from "../../../Utils/api";
import Card from '../shared/Card';


const ProductosDAO = () => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener productos
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${api}/productos`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Error fetching products');
        }
    };

    // Llamada a fetchProducts cuando el componente se monta
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {error && <p>{error}</p>}
            {products.map(product => (
                <Card key={product.Id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
};

export default ProductosDAO;