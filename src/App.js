import { useState } from "react"
import Home from "./components/home/Home"
import LoadingScreen from "./components/loading/LoadingScreen"

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className="bg-primary min-h-screen">
			{isLoading ? <LoadingScreen setIsLoading={setIsLoading} /> : <Home />}
		</div>
	)
}
export default App
