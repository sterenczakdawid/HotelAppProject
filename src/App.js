import { Navbar, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";



function App() {
	return (
		<div className="App">
			<Navbar />
			<AllRoutes />
			<Footer />
		</div>
	);
}

export default App;
