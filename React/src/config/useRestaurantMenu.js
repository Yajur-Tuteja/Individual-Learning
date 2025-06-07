import { RES_URL } from "../config/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        console.log("fetch");
        const data = await fetch(RES_URL + resId)

        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;