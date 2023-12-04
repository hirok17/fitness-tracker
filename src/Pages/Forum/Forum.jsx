import { Helmet } from "react-helmet";
import Title from "../../Component/Header/sheard/Title";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Forum = () => {
    const [page, setPage] = useState(0)
    const { data: { result, postCount } } = useQuery({
        queryKey: ["posts", page],
        queryFn: () => fetch(`https://fitness-server-zeta.vercel.app/blogs?page=${page}`)
            .then(res => res.json()),
        initialData: { result: [], postCount: 0 },
    });
    const totallPage = Math.ceil(postCount / 3);
    const pageList = [...new Array(totallPage).fill(0)];
    return (
        <div className="container mx-auto">
            <Title title="Forum"></Title>
            <Helmet><title>fit wear | forum </title></Helmet>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    result?.map(blog => <>
                        <div key={blog._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={blog.image} alt="blog" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
         
            <div className="mt-5 pb-8">
            {
                pageList.map((item, index) => <>
                    <div className="join">
                        <input onClick={()=>setPage(index)} className="join-item btn btn-square" type="radio" name="options" aria-label={index + 1}/>

                    </div>
                </>)
            }
            </div>
        </div>
    );
};

export default Forum;