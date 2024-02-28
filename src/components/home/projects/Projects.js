import Title from "../../ui/Title";
import Project from "./Project";

import visualizerImg from "../../../assets/visualizer.png";
import guidioImg from "../../../assets/guidio.png";
import dashnetImg from "../../../assets/dashnet.png";
import stocksImg from "../../../assets/stocks.png";
import brainiacsImg from "../../../assets/brainiacs.png";
import cloggysImg from "../../../assets/cloggys.png";

const Projects = () => {
    return (
        <div className="mb-40">
            <Title text="PROJECTS" />
            <div className="flex flex-wrap w-full py-10">
                <Project
                    title="Guidio"
                    desc="Write guides using Markdown editor"
                    stack="JavaScript | React JS"
                    link="https://github.com/guidioproject/Guidio-Frontend"
                    imgSrc={guidioImg}
                    animDelay={0.2}
                />
                <Project
                    title="DashNET"
                    desc="Project management for creation and task management"
                    stack="JavaScript | React JS | Spring Boot | MySQL"
                    link="https://github.com/Blagoja95/DashNET"
                    imgSrc={dashnetImg}
                    animDelay={0.4}
                />
                <Project
                    title="Sorting Visualizer"
                    desc="Visualization of sorting algorithms"
                    stack="JavaScript | React JS | Algorithms"
                    link="https://github.com/ogi1998/Sorting-Visualizer"
                    imgSrc={visualizerImg}
                    animDelay={0}
                />
                <Project
                    title="Stocks Simulator"
                    desc="Simulate buying/selling/trading stocks"
                    stack="JavaScript | EJS | Node.js | MongoDB"
                    link="https://github.com/ogi1998/Stocks-Simulator"
                    imgSrc={stocksImg}
                    animDelay={0.6}
                />
                <Project
                    title="Cloggy's"
                    desc="Order food from popular restaurants"
                    stack="JavaScript | React JS | Node.js | MongoDB"
                    link="https://github.com/ogi1998/Restaurant-Order"
                    imgSrc={cloggysImg}
                    animDelay={1}
                />
                <Project
                    title="Brainiacs"
                    desc="Website template for design agency"
                    stack="SCSS | JavaScript"
                    link="https://github.com/ogi1998/Brainiacs"
                    imgSrc={brainiacsImg}
                    animDelay={0.8}
                />
            </div>
        </div>
    );
};
export default Projects;
