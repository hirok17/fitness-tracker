import { FaFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
const TrainerCard = ({trainer}) => {
    const {_id, name, experience, image, class:course}=trainer;
    return (
        <section>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="text-base font-semibold">{course}</h3>
                    <p>Experience: {experience}</p>
                    <div className="flex gap-4">
                    <FaFacebook />
                    <FaSquareTwitter />
                    <FaLinkedin />
                    </div>
                    <div className="card-actions mt-2">
                        <Link to={`/trainer/${_id}`}><button className="btn text-white bg-[#FF000A] hover:bg-[#141B22]">Know more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerCard;