import { Container } from "./categoriesStyle"
import { ICategories } from "../../types/dataTypes";

function CategoriesList({ category }: { category: ICategories }) {
    return (
        <Container whileHover={{ scale: 1.05, transition: { duration: 0.3 }}} whileTap={{ scale: 0.9 }}>
            <section>
                <img src={category.image} />
            </section>

            <p>{category.name}</p>
            
        </Container>
    );
}
export default CategoriesList;

