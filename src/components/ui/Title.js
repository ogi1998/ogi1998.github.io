const Title = ({text}) => {
    return (
        <h2 className="relative text-gray text-6xl pb-5 mx-auto">
            {text}
            <span className="absolute bottom-0 left-1/3 w-1/3 h-1 bg-secondary"></span>
        </h2>
    );
};
export default Title;
