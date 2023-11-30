import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const AllUser = () => {
    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://fitness-server-zeta.vercel.app/users');
            return res.data;
        }
    })
    const makeAdmin=(user)=>{
        axios.patch(`https://fitness-server-zeta.vercel.app/users/admin/${user}`)
        .then(res=>{
            console.log(res.data);
            refetch();
            
        })
    }
    return (
        <section>
            <div>
                <h2 className="text-2xl font-bold text-center mt-8">Manage All User</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        users?.map((item, index)=><>
                               <tr>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                {
                                    item.role =="admin" ? "Admin" :
                                    <button onClick={()=>makeAdmin(item._id)} className="btn text-white bg-[#FF000A] hover:bg-[#141B22]">Make Admin</button>

                                }
                                </td>
                        </tr>
                        </>)
                      }
                     
                       
                        
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUser;