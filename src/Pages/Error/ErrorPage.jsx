import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section>
            <Helmet>
                <title>404 page</title>
            </Helmet>
            <div className="hero min-h-screen bg-black" style={{ backgroundImage: 'url(https://i.ibb.co/svN2FKg/404-image.jpg)' }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-[250px] font-bold">404</h1>
                        <h2 className="text-5xl bg-red-600 px-2">Oops! That Page Can not Be Found</h2>
                        <p className="my-5 text-lg">We are Really Sorry but we can not seem to find <br></br>the page you were looking for.</p>
                        <Link to="/"><button className="btn text-white bg-red-600 hover:bg-red-600">Go to Home</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;