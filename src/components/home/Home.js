import Scroll from "./Scroll"
import Contact from "./contact/Contact"
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
			<Contact />
		</div>
	)
}
export default Home