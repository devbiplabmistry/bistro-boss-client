
import FeaturedItem from '../../../assets/components/featuredItem/FeaturedItem';
import Banner from '../banner/Banner';
import Slider from '../slider/Slider';
import img from '../../../assets/home/chef-service.jpg'
import CommonTitle from '../../shared/commonTitle/CommonTitle';
import PopularMenu from '../../../assets/components/popularMenu/PopularMenu';
import ChefRecomanded from '../../../assets/components/chefRecomended/ChefRecomanded';
import SpecialMenu from '../specialMenu/SpecialMenu';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <FeaturedItem  featuredImg={img} title="Bistro Boss" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."></FeaturedItem>
            <CommonTitle  subTitle="---Check it out---" title="FROM OUR MENU"></CommonTitle>
            <PopularMenu></PopularMenu>
            <h3 className='py-20 px-40  mb-11 text-center bg-black font-roboto font-semibold text-5xl text-white'>Call Us: +91 92345678910</h3>
            <CommonTitle subTitle="---Should Try---" title="CHEF RECOMMENDS"></CommonTitle>
            <ChefRecomanded></ChefRecomanded>
            <SpecialMenu></SpecialMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;