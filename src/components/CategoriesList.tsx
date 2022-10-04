import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
    name: string;
    image: string;
}

function CategoriesList({ category }: { category: Props }) {
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

export const Container = styled(motion.li)`
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    gap: 10px;
    width: fit-content;
    max-width: 300px;

    section {
        width: fit-content;
        height: fit-content;
        filter: invert(0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        padding: 10px;
        background-color: rgba(43, 41, 41, 0.3);

        img {
            height: 20px;
            filter: invert(0.2);
        }
    }

    p {
        font-weight: 500;
        font-size: 15px;
    }
`;
