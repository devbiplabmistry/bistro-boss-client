import { Helmet } from "react-helmet";
import Cover from "../../../assets/components/cover/Cover";
import banner from "../../../assets/menu/banner3.jpg"
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import useMenu from "../../../assets/components/hooks/useMenu";
import FoodItem from "../../../assets/components/foodItem/FoodItem";
import chefImg from "../../../assets/home/chef-service.jpg"



const Menu = () => {
    const menu=useMenu()
    console.log(menu);
    const desserts =menu.filter(item=>item.category=="dessert")
    const pizzas =menu.filter(item=>item.category=="pizza")
    const salads =menu.filter(item=>item.category=="salad")
    const soups =menu.filter(item=>item.category=="soup")
    const offereds =menu.filter(item=>item.category=="offered")
    return (
        <div className="mb-8">
            <Helmet>Bistro Boss || Menu</Helmet>
            <Cover featuredImg={banner} title="OUR MENU" subTitle="WOULD YOU LIKE TO TRY A DISH ?"></Cover>
            <CommonTitle subTitle="---Don't miss---" title="TODAY'S OFFER"></CommonTitle>
            <FoodItem menu={offereds}></FoodItem>
            <Cover featuredImg={chefImg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>  
            <FoodItem menu={desserts}></FoodItem>

            <Cover featuredImg={chefImg} title="PIZZA" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <FoodItem menu={pizzas}></FoodItem>

            <Cover featuredImg={chefImg} title="SALAD" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <FoodItem menu={salads}></FoodItem>

            <Cover featuredImg={chefImg} title="soup" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <FoodItem menu={soups}></FoodItem>

        </div>
    );
};

export default Menu;