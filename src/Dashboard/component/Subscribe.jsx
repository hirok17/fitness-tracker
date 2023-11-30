import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Subscribe = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://fitness-server-zeta.vercel.app/subscribe")
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
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item => <>
                                <tr className="hover" key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>

                                </tr>
                            </>)
                        }


                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Subscribe;