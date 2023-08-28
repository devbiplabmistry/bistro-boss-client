import React, { useState, useEffect } from "react";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    const [showFullMenu, setShowFullMenu] = useState(false);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            });
    }, []);

    const viewFullMenu = () => {
        setShowFullMenu(true);
    };
console.log(menu);
    return (
        <>
            <div className="grid grid-cols-2 gap-4 my-12">
                {menu.slice(0, showFullMenu ? menu.length : 6).map(item => (
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
            {!showFullMenu && (
                <div className="mx-auto text-center mb-12">
                    <button onClick={viewFullMenu} className="btn btn-outline border-0 border-b-4">View Full Menu</button>
                </div>
            )}
        </>
    );
};

export default PopularMenu;
