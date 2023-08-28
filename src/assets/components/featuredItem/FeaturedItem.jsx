const FeaturedItem = ({ featuredImg, title, subTitle }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${featuredImg})`, 
    };

    return (
        <div className="mt-24 mb-24">
            <div className="hero min-h-screen" style={backgroundImageStyle}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center  py-16 px-40 bg-white">
                    <div className="max-w-xl">
                        <h1 className="font-cinzel font-normal text-5xl">{title}</h1>
                        <p className="font-inter text-sm font-normal">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
