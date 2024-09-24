import { useState } from "react";
import ListItem from "./ListItem";

const RestaurantCategory = ({resDetail,showItem,setShowIndex}) => {
  const { title, itemCards } = resDetail;
  
  const handledClick = () =>{
    setShowIndex()
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 ">
        <div onClick={handledClick} className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {
          showItem && <ListItem items={itemCards}/>
        }
      </div>
    </div>
  );
};

export default RestaurantCategory;
