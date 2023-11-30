import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
import banner from "../../../assets/banner3.jpg";
import banner1 from "../../../assets/banner1.jpg";
import { Link } from "react-router-dom";

const Slide = () => {
    return (
        <section>
             <Carousel showThumbs={false}>
                <div className="relative">
                    <img src={banner1} />
                     <div className="absolute left-[10%] bottom-[40%] text-white text-left">
                        <p className="text-left capitalize text-2xl mb-4"> this is perfect place for you</p>
                        <h2 className="text-5xl font-bold uppercase leading-[60px]">we are best for<br></br> build your body </h2>
                        <Link to="/classes" className="btn text-left bg-[#E95050] text-white mt-4">Classes</Link>
                         
                     </div>
                </div>
                <div className="relative">
                    <img src={banner} />
                     <div className="absolute left-[10%] bottom-[40%] text-white text-left">
                        <p className="text-left capitalize text-2xl mb-4"> this is perfect place for you</p>
                        <h2 className="text-5xl font-bold uppercase leading-[60px]">we are best for<br></br> build your body </h2>
                        <Link to="/classes" className="btn text-left bg-[#E95050] text-white mt-4">Classes</Link>
                         
                     </div>
                </div>
                
            </Carousel>
        </section>
    );
};

export default Slide;