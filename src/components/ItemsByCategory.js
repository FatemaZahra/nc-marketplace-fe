import { useParams } from "react-router-dom";

const ItemsByCategory = () => {
    const {category_name} = useParams();
    console.log(category_name)
return <h3> ITEMS </h3>
}

export default ItemsByCategory;