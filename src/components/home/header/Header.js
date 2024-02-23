import Hero from "./Hero"
import Technologies from "./Technologies"


const Header = () => {
	return (
		<div className="h-[90vh] flex flex-col items-center gap-10">
			<Hero />
			<Technologies />
		</div>
	)
}
export default Header