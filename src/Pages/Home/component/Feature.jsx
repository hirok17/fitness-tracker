import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

 
const Feature = () => {
    const [data, setData] =useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/features')
        .then(res=>{
            setData(res.data);
            console.log(res.data);
        })
    },[])
    return (
        <section className="mt-28 overflow-x-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold text-center">Our Best <span className="text-[#CC0009]">Features...</span></h2>
            <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4 mt-10">
               {
                 data?.map(item=><Card key={item._id} item={item}></Card>)
               }
            </div>
        </section>
    );
};

export default Feature;