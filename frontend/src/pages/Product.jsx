import { useParams } from 'react-router-dom';
const Product = () => {

    const { slug } = useParams();
    console.log(slug);

    return (
        <div>
            <h1>Product: {slug} </h1>
        </div>
    );
};

export default Product;
