import ListItem from "./ListItem";

const RestaurantCategory = (prop) => {
  const { title, itemCards } = prop.resDetail;
    // console.log(itemCards);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <ListItem items={itemCards}/>
      </div>
    </div>
  );
};

export default RestaurantCategory;
