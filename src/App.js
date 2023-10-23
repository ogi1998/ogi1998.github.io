import { useState } from "react"
import Home from "./components/home/Home"
import LoadingScreen from "./components/loading/LoadingScreen"

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<>
		{isLoading ? <LoadingScreen setIsLoading={setIsLoading} /> : <Home />}
		</>

	)
}
export default App
