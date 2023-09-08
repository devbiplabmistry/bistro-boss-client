import useGet from "../../../assets/components/hooks/useGet";
import CommonTitle from "../../shared/commonTitle/CommonTitle";
const PaymentHistory = () => {
    const [data] = useGet('payments')
    return (
        <div>
            <CommonTitle subTitle="---At a Glance!---" title="Payment History"></CommonTitle>
            <h2 className="font-cinzel font-bold text-3xl mt-24 mb-8">Total Payments: {data[0]?.Amount}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="bg-[#D1A054] rounded">
                            <th className="font-inter font-semibold text-base text-white">Email</th>
                            <th className="font-inter font-semibold text-base text-white">Transaction Id</th>
                            <th className="font-inter font-semibold text-base text-white">Total Price</th>
                            <th className="font-inter font-semibold text-base text-white">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index)=>    <tr key={item._id}>
                                <td className="font-inter font-semibold text-base text-orange-600">{item.email}</td>
                                <td className="font-inter font-semibold text-base text-orange-600">{item?.transactionId}</td>
                                <td className="font-inter font-semibold text-base text-orange-600">{item?.Amount}</td>
                                <td className="font-inter font-semibold text-base text-orange-600">{item?.date}</td>
                            </tr>)
                        }
                     
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default PaymentHistory;