

const AboutUs = () => {
    return (
        <section className="bg-base-200 mt-24">
            <div className="container mx-auto py-10 px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                    <img src="https://i.ibb.co/dWC5qjB/slider-2.jpg" className="w-[540px] rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold leading-[45px]">WELCOME TO OUR <br />FITNESS WEAR</h1>
                        <h3 className="text-xl font-medium text-[#ED2130] mt-4">Why We Are Different?</h3>
                        <p className="mt-5">We believe an active body is a happy body. we offer personal training along with various fitness and wellness experiences — from strength training and injury prevention to self-defense and contrast therapy. Whether your version of wellness is a weekly sparring session with a mixed martial arts trainer or meditation in the open air pavilion, we are committed to providing the possibility for you to leave each session changed. </p>
                        <button className="btn text-white bg-[#ED2130] hover:bg-[#2D394B] mt-7">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;