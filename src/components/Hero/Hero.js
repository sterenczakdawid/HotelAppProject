// import heroBig from "../../assets/images/hero-big.jpg";
import "./hero.css";

export const Hero = () => {
	return (
		<>
			<header>
				<div className="hero-img">
					<div className="hero-shadow"></div>
					<div className="hero-text">
						<h1>Some fancy heading</h1>
						<p>Even more fancy subheading</p>
					</div>
				</div>
			</header>
			<div style={{height: 100 + 'vh'}}></div>
		</>
	);
};
