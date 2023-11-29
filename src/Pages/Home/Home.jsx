import AboutUs from "./component/AboutUs";
import Feature from "./component/Feature";
import Newslatter from "./component/Newslatter";
import Slide from "./component/Slide";
import Team from "./component/Team";
import Testimonials from "./component/Testimonials";

 

const Home = () => {
    return (
        <div>
           <Slide></Slide>
           <Feature></Feature>
           <AboutUs></AboutUs>
           <Testimonials></Testimonials>
           <Team></Team>
           <Newslatter></Newslatter>
        </div>
    );
};

export default Home;