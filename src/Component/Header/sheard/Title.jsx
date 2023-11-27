

const Title = ({title}) => {
    return (
        <div className="bg-cover min-h-[250px] bg-black" style={{ backgroundImage: 'url(https://i.ibb.co/gm5mCjj/breadcrumb-image.jpg)'}}>
            
            <div className="text-center pt-[150px]">
                <h1 className="text-3xl lg:text-5xl font-bold text-white">{title}</h1>
            </div>
        </div>
    );
};

export default Title;