import { BiWallet } from "react-icons/bi";
import useGet from "../../../../assets/components/hooks/useGet";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import useAxios from "../../../../assets/components/hooks/useAxios";
import useMenu from "../../../../assets/components/hooks/useMenu";
import { useQuery } from "react-query";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";





const AdminHome = () => {
    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await instance.get('/order-stats')
            return res.data
        }
    })
    const [payments] = useGet("payments")
    const menu = useMenu()
    const total = payments.reduce((sum, item) => sum + item.Amount, 0)
    const quantity2 = payments.reduce((sum, item) => sum + item.quantity, 0)
    const quantity = parseFloat(quantity2)

    const prices = parseFloat(total)
    const price2 = prices.toFixed(2)
    const price = parseFloat(price2)
    const [instance] = useAxios()

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await instance.get('/user')
            return res.data
        }
    })
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };





    return (
        <div className="m-8">
            <h2 className="font-cinzel font-semibold text-3xl mb-6">Hi welcome Back</h2>
            <div className="user-wrapper grid grid-cols-4 gap-4">
                <div className=" text-center flex items-center justify-center rounded-lg px-24 py-7 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <h4 className="text-3xl mr-2  text-white">  <BiWallet></BiWallet></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {price}
                        <br />
                        Revenue
                    </h4>
                </div>
                <div className=" text-center flex justify-center items-center rounded-lg  px-24 py-7 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <h4 className="text-3xl mr-2  text-white">  <FaUsers></FaUsers></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {users?.length}
                        <br />
                        Customers
                    </h4>
                </div>
                <div className="rounded-lg text-center flex justify-center items-center  px-24 py-7 bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <h4 className="text-3xl mr-2  text-white">  <MdProductionQuantityLimits></MdProductionQuantityLimits></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {menu?.length}
                        <br />
                        Products
                    </h4>
                </div>
                <div className="rounded-lg text-center flex justify-center items-center  px-24 py-7 bg-gradient-to-r from-[#6AAEFF] to-[#6AAEFF]">
                    <h4 className="text-3xl mr-2  text-white">  <BsFillCartFill></BsFillCartFill></h4>
                    <h4 className="font-inter font-extrabold text-lg text-white">
                        {quantity}
                        <br />
                        Orders
                    </h4>
                </div>

            </div>
            
            <div className="flex mt-8">

            <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {data?.map((entry, index) => (
                                    // <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />

                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
}
export default AdminHome;