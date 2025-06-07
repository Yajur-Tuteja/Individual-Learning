import resArray from "../config/mockData";
import useOnlineStatus from "../config/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    /* console.log(json);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); */


    //Optional Chaining
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // State variable - Powerful variable facilitating DOM Manipulation
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    initResList = fetchData();
  }, []);

  console.log("Body rendered")

  // conditional rendering
  // if(resList.length === 0){
  //   return <Shimmer />
  // }

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>No internet.</h1>

  return filteredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // need searchtext
              const filteredList = resList.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
              console.log(searchText);
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredResList(filteredList);
            console.log(filteredList);
          }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          filteredResList.map((res) => (
            <Link
              key={res.info.id}
              to={"restaurants/" + res.info.id}
            >
              <RestaurantCard
                resData={res}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )

}

export default Body;