import { Container } from "./categoriesStyle";
import Image from "next/image"

import { ICategories } from "../../types/dataTypes";

function CategoriesList({ category }: { category: ICategories }) {
    return (
        <Container whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} whileTap={{ scale: 0.9 }}>
            <section>
                <img src={category.image}  alt={category.name}/>
            </section>

            <p>{category.name}</p>
        </Container>
    );
}
export default CategoriesList;
