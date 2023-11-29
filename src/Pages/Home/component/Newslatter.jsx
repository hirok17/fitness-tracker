import axios from "axios";
import toast from "react-hot-toast";

const Newslatter = () => {
    const heandelForm=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email =e.target.email.value;
        const userData={name, email};
        console.log(userData);

        axios.post('http://localhost:5000/subscribe', userData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('successfully subscribed');
                e.target.reset();
            }
        })
    };
    return (
        <section className="mt-32">
            <div className="max-w-[960px] mx-auto flex justify-center py-16 rounded-lg z-50 relative -bottom-8 px-3 bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/YT3sBRm/gallery5.jpg)'}}>
           
             <div>
                    <div className="text-center text-white space-y-3 mb-7">
                      <h2 className="text-5xl font-bold">Subscribe Here</h2>
                      <p>Subscribe to get notified about new service and updates</p>
                    </div>
                    <form onSubmit={heandelForm}>
                        <div className="lg:join space-y-2 lg:space-y-0">
                            <div>
                                 
                                    <input type="text" name="name" className="input input-bordered join-item focus:outline-none" placeholder="Your name" />
                                    
                             
                            </div>
                            <div>
                                <input type="email" name="email" className="input input-bordered join-item focus:outline-none" placeholder="Your email" />
                            </div>

                            <div className="bg-white inline">
                                <input className="btn join-item text-white bg-[#DF3737] hover:bg-[#141B22] p-2" type="submit" value="Subscribe" />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-black py-5 -z-10"><br /></div>
        </section>
    );
};

export default Newslatter;