import Title from "../../ui/Title";
import Project from "./Project";

import visualizerImg from "../../../assets/visualizer.png";
import guidioImg from "../../../assets/guidio.png";
import dashnetImg from "../../../assets/dashnet.png";
import stocksImg from "../../../assets/stocks.png";
import brainiacsImg from "../../../assets/brainiacs.png";

const Projects = () => {
    return (
        <div>
            <Title text="PROJECTS" />
            <div className="flex flex-wrap w-full py-10">
                <Project
                    title="Sorting Visualizer"
                    stack="JavaScript | React JS | Algorithms"
                    link="https://github.com/ogi1998"
                    imgSrc={visualizerImg}
                    animDelay={0}
                />
                <Project
                    title="Guidio"
                    stack="JavaScript | React JS"
                    link="https://github.com/ogi1998"
                    imgSrc={guidioImg}
                    animDelay={0.2}
                />
                <Project
                    title="DashNET"
                    stack="JavaScript | React JS | Spring Boot | MySQL"
                    link="https://github.com/ogi1998"
                    imgSrc={dashnetImg}
                    animDelay={0.4}
                />
                <Project
                    title="Stocks Simulator"
                    stack="JavaScript | EJS | Node.js | MongoDB"
                    link="https://github.com/ogi1998"
                    imgSrc={stocksImg}
                    animDelay={0.6}
                />
                <Project
                    title="Brainiacs"
                    stack="SCSS | JavaScript"
                    link="https://github.com/ogi1998"
                    imgSrc={brainiacsImg}
                    animDelay={0.8}
                />
            </div>
        </div>
    );
};
export default Projects;
