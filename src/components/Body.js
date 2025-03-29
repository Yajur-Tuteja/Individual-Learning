import resArray from "../config/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {

  // State variable - Powerful variable facilitating DOM Manipulation
  const [resList, setResList] = useState(resArray);

  // Normal js variable
  // let resListJS = [
  //     {
  //         "info": {
  //           "id": "385824",
  //           "name": "The Belgian Waffle Co.",
  //           "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
  //           "costForTwo": "₹200 for two",
  //           "cuisines": [
  //             "Waffle",
  //             "Desserts",
  //             "Ice Cream",
  //             "Beverages"
  //           ],
  //           "avgRating": 4.6,
  //           "sla": {
  //             "deliveryTime": 46,
  //             "lastMileTravel": 11.2,
  //             "serviceability": "SERVICEABLE",
  //             "slaString": "45-50 mins",
  //             "lastMileTravelString": "11.2 km",
  //             "iconType": "ICON_TYPE_EMPTY"
  //           }
  //         }
  //     },
  //     {
  //         "info": {
  //           "id": "385825",
  //           "name": "Raja da Dhaba",
  //           "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
  //           "costForTwo": "₹300 for two",
  //           "cuisines": [
  //             "Waffle",
  //             "Desserts",
  //             "Ice Cream",
  //             "Beverages"
  //           ],
  //           "avgRating": 5.0,
  //           "sla": {
  //             "deliveryTime": 46,
  //             "lastMileTravel": 11.2,
  //             "serviceability": "SERVICEABLE",
  //             "slaString": "45-50 mins",
  //             "lastMileTravelString": "11.2 km",
  //             "iconType": "ICON_TYPE_EMPTY"
  //           }
  //         }
  //     },
  //     {
  //         "info": {
  //           "id": "385822",
  //           "name": "Sheikhurpuriyan Da Dhaba",
  //           "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
  //           "costForTwo": "₹300 for two",
  //           "cuisines": [
  //             "Waffle",
  //             "Desserts",
  //             "Ice Cream",
  //             "Beverages"
  //           ],
  //           "avgRating": 3.0,
  //           "sla": {
  //             "deliveryTime": 46,
  //             "lastMileTravel": 11.2,
  //             "serviceability": "SERVICEABLE",
  //             "slaString": "45-50 mins",
  //             "lastMileTravelString": "11.2 km",
  //             "iconType": "ICON_TYPE_EMPTY"
  //           }
  //         }
  //     },
  // ]

    return(
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        filteredList = resList.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setResList(filteredList);
                        console.log(filteredList);
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  resList.map((res) => (
                    <RestaurantCard 
                        key = {res.info.id}
                        resData = {res}
                    />
                  ))
                }
            </div>
        </div>
    )
}

export default Body;