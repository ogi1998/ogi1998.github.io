const Timeline = ({ children }) => {
    return (
        <div className="mt-10 border-l border-dgray relative w-1/3 h-fit">
            <span className="absolute top-0 -left-1 bg-primary w-2 h-2"></span>
            {children}
        </div>
    );
};
export default Timeline;
