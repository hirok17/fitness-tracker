
const Testimonials = () => {
    return (
        <section>
            <div className="text-center mt-28">
            <span className="text-center text-3xl font-semibold bg-[#FF262F] text-white p-1">Happy Clients Thoughts</span>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 mt-9 px-3">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked  />
                        </div>
                        <p>Tani is a wonderful yoga instructor, I have been doing her classes, since the past two monthes and it had an great effect on my health and wieight. Each session she knew what my body needed and guided me to do better each time. She is a very talented Yoga teacher in aamra Active. I highly and truly recoomend aamra Active.</p>
                        <h2 className="text-base text-red-500">DANIEL NOAH</h2>
                    </div>
                </div>
                {/* 2nd */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked  />
                        </div>
                        <p>Tani Baten is an excellent Yoga teacher. She is friendly and caring for each and every student. I had back pain but after joining the Yoga class now I feel better. And I feel that my body has beconme very relaxed and flexible. Thank you so much and I wish you all the best.</p>
                        <h2 className="text-base text-red-500">Mark C. Green</h2>
                    </div>
                </div>
                {/* 3rd */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked  />
                        </div>
                        <p>I have some back issues so i feel afraid to do any kind of exercise or movement; I thought it will hurt my back. After joining Tani mamfor Yoga, she is the one who gave me confidence that whatever I do it wont hurt my back and I can do it. She is a great instructor and a wonderful human being. Thank you for bringing back the little bit of confidence I had.</p>
                        <h2 className="text-base text-red-500">John A. Joyce</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;