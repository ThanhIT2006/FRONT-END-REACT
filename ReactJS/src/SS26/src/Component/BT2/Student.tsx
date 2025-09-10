import { useParams } from "react-router-dom";

function ProductDetail() {
 const { name } = useParams<{ name: string }>();
    return (
        <div>Name= {name}</div>
    )
}

export default ProductDetail
