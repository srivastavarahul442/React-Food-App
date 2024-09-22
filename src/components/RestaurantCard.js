import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } =
    props.resData;
  return (
    <div className="hover:scale-105 w-[230px] h-[400px] my-2 mx-4 p-3 border-gray-200 shadow-lg shadow-gray-300 rounded-xl bg-green-50 hover:bg-green-100">
      <img
        className="h-[150px] w-[250px] rounded-2xl shadow-lg shadow-gray-200 mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="my-1">{cuisines.join(", ")}</h4>
      <h4 className="my-1">{avgRating}</h4>
      <h4 className="my-1">{costForTwo}</h4>
      <h4 className="my-1">{sla.deliveryTime}</h4>
    </div>
  );
};


export default RestaurantCard;
