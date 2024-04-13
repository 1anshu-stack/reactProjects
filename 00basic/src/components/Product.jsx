import { useParams } from "react-router-dom";

const Product = ({value}) => {
    const param = useParams();

    return (
        <div>
            <h1>{value}</h1>
            <h1>#{param.id}</h1>
        </div>
    );
};

export default Product;