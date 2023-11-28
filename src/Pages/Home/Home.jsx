import AboutUs from "./component/AboutUs";
import Feature from "./component/Feature";
import Slide from "./component/Slide";
import Testimonials from "./component/Testimonials";

 

const Home = () => {
    return (
        <div>
           <Slide></Slide>
           <Feature></Feature>
           <AboutUs></AboutUs>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;