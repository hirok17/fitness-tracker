 import "./card.css";

const Card = ({item}) => {
    return (
        <div className="relative">
           <div id="card_img">
            <img className="rounded-lg" src={item.image} alt="" />
           </div>
            <div className="bg-slate-950 bg-opacity-60 hover:bg-[#CC0009] transition-all w-[260px] text-center absolute bottom-6">
                <h1 className="text-lg text-white py-4">{item.title}</h1>
            </div>
        </div>
    );
};

export default Card;