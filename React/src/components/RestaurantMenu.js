import useRestaurantMenu from "../config/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines} - {costForTwoMessage}</h2>
            <ul>
                {
                    itemCards.map((itemCard) => (
                        <li key={itemCard.card.info.id}>
                            {itemCard.card.info.name} -
                            Rs.{itemCard.card.info.price / 100 || itemCard.card.info.defaultPrice / 100}
                        </li>
                    ))
                }

                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>Biryani</li>
                <li>Biryani</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu