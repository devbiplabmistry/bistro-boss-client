
const CommonTitle = ({subTitle,title}) => {
    return (
        <div className="mx-auto text-center">
            <p className="font-inter font-normal italic text-xl text-[#D99904]">{subTitle}</p>
            <h3 className="py-3 mt-4 font-inter font-normal text-4xl border-y-2 inline-block ">{title}</h3>
        </div>
    );
};

export default CommonTitle;