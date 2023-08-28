import ChefRecomanded from "../../../assets/components/chefRecomended/ChefRecomanded";
import Cover from "../../../assets/components/cover/Cover"
import useMenu from "../../../assets/components/hooks/useMenu";
import banner from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Shop = () => {
    const menu =useMenu()
    const desserts =menu.filter(item=>item.category=="dessert")
    const pizzas =menu.filter(item=>item.category=="pizza")
    const salads =menu.filter(item=>item.category=="salad")
    const soups =menu.filter(item=>item.category=="soup")
    const offereds =menu.filter(item=>item.category=="offered")
    return (
        <div>
            <Cover featuredImg={banner} title="OUR SHOP" subTitle="WOULD YOU LIKE TO TRY A DISH ?"></Cover>
            <Tabs className="mx-auto text-center ">
                <TabList className="flex  ">
                    <Tab className="font-inter font-bold text-2xl text-center mx-auto hover:underline transition-all hover:text-[#BB8506]  uppercase">salad</Tab>
                    <Tab className="font-inter font-bold text-2xl text-center mx-auto hover:underline transition-all hover:text-[#BB8506] uppercase">pizza</Tab>
                    <Tab className="font-inter font-bold text-2xl text-center mx-auto hover:underline transition-all hover:text-[#BB8506] uppercase">soups</Tab>
                    <Tab className="font-inter font-bold text-2xl text-center mx-auto hover:underline transition-all hover:text-[#BB8506] uppercase">Desserts</Tab>
                    <Tab className="font-inter font-bold text-2xl text-center mx-auto hover:underline transition-all hover:text-[#BB8506] uppercase">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <ChefRecomanded menu={salads}></ChefRecomanded>
                </TabPanel>
                <TabPanel>
                    <ChefRecomanded menu={pizzas}></ChefRecomanded>
                </TabPanel>
                <TabPanel>
                <ChefRecomanded menu={soups}></ChefRecomanded>
                </TabPanel>
                <TabPanel>
                <ChefRecomanded menu={desserts}></ChefRecomanded>

                </TabPanel>
                <TabPanel>
                <ChefRecomanded menu={offereds}></ChefRecomanded>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;