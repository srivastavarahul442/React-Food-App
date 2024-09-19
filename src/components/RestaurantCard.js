import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } =
    props.resData;
  return (
    <div className="w-[200px] h-[450px] my-2 mx-3 p-2 border-gray-200 shadow-lg shadow-gray-300">
      <img
        className="h-[150px] w-[250px] rounded-2xl shadow-lg shadow-gray-200 mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
