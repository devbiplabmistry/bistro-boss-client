import { useState } from "react";
import ChefRecomanded from "../../../assets/components/chefRecomended/ChefRecomanded";
import Cover from "../../../assets/components/cover/Cover"
import useMenu from "../../../assets/components/hooks/useMenu";
import banner from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const Shop = () => {
    const category = useParams();
    const cat=category.category;
    // console.log(cat);
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const initialIndex = categories.indexOf(cat)
    // console.log(initialIndex);
    const menu = useMenu()
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const desserts = menu.filter(item => item.category == "dessert")
    const pizzas = menu.filter(item => item.category == "pizza")
    const salads = menu.filter(item => item.category == "salad")
    const soups = menu.filter(item => item.category == "soup")
    const offers = menu.filter(item => item.category == "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover featuredImg={banner} title="OUR SHOP" subTitle="WOULD YOU LIKE TO TRY A DISH ?"></Cover>
            <Tabs className="mx-auto text-center " defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
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
                    <ChefRecomanded menu={offers}></ChefRecomanded>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;