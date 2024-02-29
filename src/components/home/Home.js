import { useRef } from "react"
import Scroll from "./Scroll"
import Contact from "./contact/Contact"
import Experience from "./experience/Experience"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"
import Projects from "./projects/Projects"

const Home = () => {
	const refs = useRef({});
	return (
		<div className="min-h-screen bg-primary" ref={el => refs.current['top'] = el}>
			<div className="px-28 tab:px-20 mob:px-5">
				<Scroll />
				<Navbar refs={refs} />
				<Header />
				<Experience elRef={el => refs.current['exp'] = el}  />
				<Projects elRef={el => refs.current['projects'] = el}  />
				<Contact elRef={el => refs.current['contact'] = el}  />
			</div>
			<Footer refs={refs} />
		</div>
	)
}
export default Home