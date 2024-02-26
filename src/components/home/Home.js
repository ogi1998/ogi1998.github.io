import Scroll from "./Scroll"
import Experience from "./experience/Experience"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"
import Projects from "./projects/Projects"

const Home = () => {
	return (
		<div className="min-h-screen px-28 bg-primary pb-96">
			<Scroll />
			<Navbar />
			<Header />
			<Experience />
			<Projects />
		</div>
	)
}
export default Home