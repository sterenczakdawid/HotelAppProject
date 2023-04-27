import { Navbar2, Footer, Hero } from "./components";
// import { Navbar2 } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar2 />
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
