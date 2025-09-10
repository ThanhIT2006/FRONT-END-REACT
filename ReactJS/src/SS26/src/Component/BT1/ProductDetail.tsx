import { useParams } from "react-router-dom";

function ProductDetail() {
 const { id } = useParams<{ id: string }>();
    return (
        <div>ID= {id}</div>
    )
}

export default ProductDetail
