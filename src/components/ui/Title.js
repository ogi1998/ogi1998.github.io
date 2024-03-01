const Title = ({text, className}) => {
    return (
        <h2 className={`relative text-gray text-6xl pb-5 mx-auto text-center w-fit lap:text-5xl tab:text-4xl mob:text-3xl ${className}`}>
            {text}
            <span className="absolute bottom-0 left-1/3 w-1/3 h-1 bg-secondary"></span>
        </h2>
    );
};
export default Title;
