import useMenu from "../../../assets/components/hooks/useMenu";

const Recomanded = () => {
    const menu =useMenu()
    return (
        <div className="grid grid-cols-3 gap-8 mt-12 mb-32">
          {
            menu.slice(0,3).map(item => (
                <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-inter font-semibold text-2xl">{item.name}</h2>
                        <p className="font-inter text-base font-normal">{item.recipe}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline font-inter font text-xl text-[#BB8506] border-0 border-b-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
    );
};

export default Recomanded;
