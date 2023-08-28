import { useEffect, useState } from 'react';
import specialImg from '../../../assets/home/featured.jpg';
import specialImg2 from '../../../assets/home/featured.jpg';
import CommonTitle from '../../shared/commonTitle/CommonTitle';

const SpecialMenu = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${specialImg})` }}>
                <div className="hero-overlay bg-[rgba(21,21,21,0.7)]"></div>
                <div className=" text-center text-neutral-content">
                    <CommonTitle className="" title="FROM OUR MENU" subTitle="---Check it out---"></CommonTitle>
                    <div className='flex gap-8 mt-12'>
                        <div>
                            <img src={specialImg2} className='w-[600px] h-96]' alt="" />
                        </div>
                        <div className="max-w-lg">
                            <h6 className="font-inter font-normal text-2xl text-white">{currentTime.toLocaleString()}</h6>

                            <h5 className="font-inter font-normal text-2xl text-white">WHERE CAN I GET SOME?</h5>
                            <p className="font-inter font-normal  text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="font-inter mt-11 btn btn-outline border-0 border-b-2 font-semibold text-white text-xl">Read More</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SpecialMenu