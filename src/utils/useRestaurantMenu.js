import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resID) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = fetch(MENU_URL+resID+"&catalog_qa=undefined&submitAction=ENTER")

          const jsonData = await data.json();
          setResInfo(jsonData)
    }

    return resInfo;
}

export default useRestaurantMenu;