
import Hero from "./Hero"
import Technologies from "./Technologies"


const Header = () => {
	return (
		<div className="h-[85vh] flex flex-col items-center justify-between">
			<Hero />
			<Technologies />
		</div>
	)
}
export default Header