const FeaturedItem = ({ featuredImg, title, subTitle }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${featuredImg})`,
    };
    return (
        <div className="mt-24 mb-24">
            <div className="hero min-h-screen" style={backgroundImageStyle}>
                <div className="text-center  py-16 px-40 bg-[rgba(21,21,21,0.6)]">
                    <div className="max-w-xl">
                        <h1 className="font-cinzel font-bold text-5xl text-white">{title}</h1>
                        <p className="font-inter text-sm font-semibold text-white">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
