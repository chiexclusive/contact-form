// ============================CONTACT FORM COMPONENT==============================
// ================================================================================

import "./ContactForm.css";
import {Dropdown} from "react-bootstrap"

function ContactForm () {
	return (
		<div className = "contact-card col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<header className = "d-flex flex-column align-items-center justify-content-center">
				<h3>Lets know you more</h3>
				<small>Fill the appropriate details</small>
			</header>
			<section className = "p-3">
				<form>
					<div className = "dropdown">
						<div className = "form-control dropdown-toggle">Country</div>
						<div className = "dropdown-menu">
							<div className = "dropdown-item" dataValue = "Nig"></div>
						</div>
					</div>
				</form>
			</section>
		</div>
	);
}

export default ContactForm;