import Scroll from "./Scroll"
import Experience from "./experience/Experience"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"

const Home = () => {
	return (
		<div className="min-h-screen px-28 bg-primary">
			<Scroll />
			<Navbar />
			<Header />
			<Experience />
		</div>
	)
}
export default Home