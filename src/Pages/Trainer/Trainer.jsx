import { Helmet } from "react-helmet";
import Title from "../../Component/Header/sheard/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import TrainerCard from "./component/TrainerCard";

 
const Trainer = () => {
    const [trainers, setTrainers]=useState([]);
    useEffect(()=>{
            axios.get("https://fitness-server-zeta.vercel.app/trainer")
            .then(res=>{
                setTrainers(res.data);
            })
    },[])
    return (
        <section>
            <Title title="OUR TRAINERS"></Title>
            <Helmet><title>Fit wear | Our best trainers</title></Helmet>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    trainers?.map(trainer=><TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </section>
    );
};

export default Trainer;