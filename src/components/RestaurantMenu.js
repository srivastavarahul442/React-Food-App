import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex]= useState(0)

  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <ShimmerUI />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((res,index) => (
        <RestaurantCategory
          key={res?.card?.card?.title}
          resDetail={res?.card?.card}
          showItem={index===showIndex?true:false}
          setShowIndex={()=>{setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
