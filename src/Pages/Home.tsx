import axios from 'axios';
import { useEffect, useState } from 'react'
import DUMMY_IMAGE from '/src/assets/images/dummy-img.webp'

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const getProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products?limit=15')
            setProducts(res.data);
        } catch (err: unknown) {
            console.log(err)
            setError("Failed to fetch products. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (<div className='product-container mt-20 p-4'>
        {loading ? <h1 className="text-5xl font-bold mb-2">Loading...</h1> :
            error ? <h1 className="text-5xl font-bold mb-2">{error}</h1>
                : <>
                    <>
                        <h1 className="text-2xl font-bold mb-2">Products</h1>
                        <p className="">Browse through our featured collection of top-selling products. Each item is hand-picked to meet your needs.</p>
                    </>
                    <div className='responsive-grid'>
                        {products.map((product: Product) => (
                            <div
                                key={product?.id}
                                className='product-card'
                            >

                                <img
                                    className='product-image'
                                    alt={product?.title}
                                    src={product?.image || DUMMY_IMAGE}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = DUMMY_IMAGE
                                    }}
                                />

                                <div className='product-details-wrapper'>
                                    <h2 className='product-title'>{product?.title}</h2>
                                    <p className='product-desc'>{product?.description.slice(0, 100)}...</p>
                                    <button className="">Buy ${product?.price}</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </>}
    </div>)
}

export default Home