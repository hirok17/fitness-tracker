import axios from "axios";
import { useEffect, useState } from "react";



const Trainers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fitness-server-zeta.vercel.app/trainer')
            .then(res => {
                setData(res.data);
            })
    }, [])
    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Trainer</th>
                            <th>Experience</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item => <>
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="TRAINER" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                 
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                     {item.class}
                                        
                                    </td>
                                    <td>{item.experience}</td>
                                    <th>
                                         {item.email}
                                    </th>
                                </tr>
                            </>)
                        }

                    </tbody>



                </table>
            </div>
        </section>
    );
};

export default Trainers;