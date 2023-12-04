
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
    const { data: { result} } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetch("https://fitness-server-zeta.vercel.app/blogs")
            .then(res => res.json()),
        initialData: { result: [] },
    });
    return (
         <section className="mt-10">
            <h2 className="text-3xl font-bold text-center">Latest Blog</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    result.map(blog=><>
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
            
         </section>
    );
};

export default Blogs;