import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner from "../../../assets/banner3.jpg";
import banner1 from "../../../assets/banner1.jpg";

const Slide = () => {
    return (
        <section>
            <AwesomeSlider>
            <div data-src={banner1}/>   
            <div data-src={banner}/>   
            </AwesomeSlider>
        </section>
    );
};

export default Slide;