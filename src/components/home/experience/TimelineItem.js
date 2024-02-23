const TimelineItem = ({title, time, companyName, companyLink, description, skills}) => {
    return (
        <div className="relative px-5 mb-5">
            <div className={` relative p-1 after:absolute after:h-4 after:w-4 after:-left-7 after:top-2 after:bg-secondary after:rounded-full`}>
                <p className="text-gray rounded-sm font-semibold text-sm">
                    {time}
                </p>
                <h4 className="text-secondary text-3xl font-bold">{title}</h4>
                <a className="text-gray inline-block text-xl my-2" href={companyLink}>
                    {companyName}
                </a>
                <p className="text-light my-2">
                    {description}
                </p>
                <ul className="flex flex-wrap w-full gap-2 my-2">
                    {skills.map((skill, id) => 
                        <li className="bg-dsecondary text-light p-1 rounded" key={`${skill}-${id}`}>{skill}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default TimelineItem;
