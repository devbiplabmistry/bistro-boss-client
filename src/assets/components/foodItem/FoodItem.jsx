import { useState } from "react";
import { Link } from "react-router-dom";


const FoodItem = ({menu,category}) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 my-12">
                {menu.map(item => (
                    <div key={item._id}>
                        <div className="flex gap-4">
                            <div>
                                <img src={item.image} className="w-28 h-24" style={{ borderRadius: '0 200px 200px 200px' }} alt={item.name} />
                            </div>
                            <div>
                                <h5 className="font-cinzel text-xl font-normal">{item.name}</h5>
                                <p className="font-inter font-normal text-base">{item.recipe}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           <Link to={`/shop/${category}`}>
           <button  className="btn btn-outline border-0 border-b-2 font-inter font-medium text-xl mx-auto block">ORDER YOUR FAVOURITE FOOD</button>
           </Link>
        </div>
    );
};

export default FoodItem;