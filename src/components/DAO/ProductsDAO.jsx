import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../shared/Card';
import api from '../../../Utils/api';


const ProductosDAO = ({ onAddToCart, numero}) => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener productos
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3080/productos');
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
        <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {error && <p>{error}</p>}
            {console.log(products)}
            {products
                .filter((product) => product.faction === numero) // Filtrar productos que tengan faction = 1
                .map((product) => (
                    <Card key={product.Id} product={product} onAddToCart={onAddToCart} />
                ))
            }

        </div>
    );
};

export default ProductosDAO;