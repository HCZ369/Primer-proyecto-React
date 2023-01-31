import "../components/Testimonial.css";
import photo1 from "../img/profile1.jpg";

function Testimonial({ img, name, stars, text }) {
	return (
		<div className="Testimonial__container">
			<div>
				<img className="Testimonial__photo" src={img} alt="Photo profile" />
				<h2 className="Testimonial__name">{name}</h2>
			</div>
			<div className="Testimonial__content">
				<p className="Testimonial__stars">{stars}</p>
				<p className="Testimonial__text">{text}</p>
			</div>
		</div>
	);
}
export default Testimonial;
