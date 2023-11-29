
const Team = () => {
    return (
        <section className="bg-[#141B22] py-12 mt-11">
           <div className="text-center text-white">
                <h3 className="text-2xl font-bold bg-[#D72323] inline">TEAM EXPERT</h3>
                <h2 className="text-5xl mt-5">Team Of Expert Coaches</h2>
           </div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-3 mt-7">
                <div className="relative">
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/4JS9fYM/team1.jpg" alt="" />
                    </div>
                    <div className="bg-white text-[#141B22] w-[260px] text-center absolute -bottom-5 left-8 rounded-lg">
                        <h1 className="text-lg hover:text-red-600 pt-4">MATT ROBERTS</h1>
                        <p className="pb-3">Body building Coach</p>
                    </div>
                </div>
                {/* 2nd card */}
                <div className="relative">
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/179fqz8/team2.jpg" alt="" />
                    </div>
                    <div className="bg-white text-[#141B22] w-[260px] text-center absolute -bottom-5 left-8 rounded-lg">
                        <h1 className="text-lg hover:text-red-600 pt-4">SAARA</h1>
                        <p className="pb-3">Squats Coach</p>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="relative">
                    <div>
                        <img className="rounded-lg" src="https://i.ibb.co/SrCfWWH/team3.jpg" alt="" />
                    </div>
                    <div className="bg-white text-[#141B22] w-[260px] text-center absolute -bottom-5 left-8 rounded-lg">
                        <h1 className="text-lg hover:text-red-600 pt-4">JAMES ROBERTS</h1>
                        <p className="pb-3">Weight Lifting Coach</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;