import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ListItem = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-[75%]">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs  ">{item.card.info.description}</p>
          </div>
          <div className="hover:scale-105">
            <button onClick={() => handleAddItem(item)} className="absolute bg-slate-100 text-green-600 font-bold rounded-lg shadow-lg px-3 py-1 ml-10">Add +</button>
            <img className="w-[140px] h-[130px]  m-1 rounded-3xl" src={CDN_URL + item.card.info.imageId}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
