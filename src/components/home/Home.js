import Scroll from "./Scroll"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"
import Projects from "./projects/Projects"

const Home = () => {
	return (
		<div className="min-h-screen bg-primary">
			<div className="px-28">
				<Scroll />
				<Navbar />
				<Header />
				<Experience />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</div>
	)
}
export default Home