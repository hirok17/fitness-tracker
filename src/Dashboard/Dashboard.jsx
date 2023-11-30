import { FaBuilding } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
         <section>
            <div className="flex">
                {/* dashboard aera */}
                <div className="w-[200px] min-h-screen bg-black ">
                    <div className="mt-8">
                        <ul className="text-center space-y-5">
                        <li>
                                <NavLink className="btn" to="/"><FaBuilding></FaBuilding>Viwe site</NavLink>
                            </li>
                            <li>
                                <NavLink className="btn" to="/dashboard/subscribe">Subscribers</NavLink>
                            </li>
                            <li>
                                <NavLink className="btn" to="/dashboard/trainers">Trainers</NavLink>
                            </li>
                            <li>
                                <NavLink className="btn" to="/dashboard/alluser">All User</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* contect aera */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
         </section>
    );
};

export default Dashboard;