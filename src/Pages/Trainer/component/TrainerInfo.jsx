import { Helmet } from "react-helmet";
import Title from "../../../Component/Header/sheard/Title";
import { useLoaderData } from "react-router-dom";

 

const TrainerInfo = () => {
    const trainerInfo =useLoaderData();
    const {name, experience, image, class:course, phone, email, solt1, solt2, solt3, solt4, solt5, solt6}=trainerInfo;
    return (
        <section>
            <Title title="TRAINNER DETAILS"></Title>
            <Helmet><title>Fit wear | trainer details</title></Helmet>
            <div className="container mx-auto mt-16 flex justify-center gap-10">
                <div>
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-5xl font-bold">About me :</h2>
                    <div className="mt-7 space-y-5">
                    <p><strong className="text-xl">Name: </strong>{name}</p>
                    <p><strong className="text-xl">Trainer: </strong>{course}</p>
                    <p><strong className="text-xl">Experience: </strong>{experience}</p>
                    <p><strong className="text-xl">Phone: </strong>{phone}</p>
                    <p><strong className="text-xl">Email: </strong>{email}</p>

                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#FF000A] mt-5">Class Schedule for Every Day</h2>
                        <ul className="text-xl mt-5">
                            <li>{solt1}</li>
                            <li>{solt2}</li>
                            <li>{solt3}</li>
                            <li>{solt4}</li>
                            <li>{solt5}</li>
                            <li>{solt6}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerInfo;