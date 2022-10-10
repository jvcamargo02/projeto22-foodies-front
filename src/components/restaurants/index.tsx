import { useRouter } from "next/router";

import { IRestaurant } from "../../types/dataTypes";
import { Container } from "./restaurantsListStyle"

interface Props {
    restaurant: IRestaurant;
}

function RestaurantList({ restaurant }: Props) {
    const router = useRouter();
    const variants = {
        scale: restaurant.isOpen ? 1.05 : 1,
        transition: restaurant.isOpen ? { duration: 0.3 } : {  }
    }


    return (
        <Container isOpen={restaurant.isOpen} whileHover={variants} whileTap={restaurant.isOpen ? { scale: 0.9 } : { scale: 1 }} onClick={() => router.push(`/restaurant/${restaurant.id}`)}>
            {" "}
            <img src={restaurant.image} alt={restaurant.name} title={restaurant.name} />
            <section className="name">
                <h4>{restaurant.name}</h4>

                <p>{restaurant.type}</p>
            </section>
            <section className="is-open">
                <h6>{restaurant.isOpen ? "Open" : "Closed"}</h6>
                <p>
                    <span>{restaurant.openingHour}</span> - <span>{restaurant.closeHour}</span>
                </p>
            </section>{" "}
        </Container>
    );
}

export default RestaurantList;

