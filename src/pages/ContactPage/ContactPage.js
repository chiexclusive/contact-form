// ========================== CONTACT PAGE =============================
// =====================================================================
import './ContactPage.css';
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import BackgroundContents from "../../components/BackgroundContents/BackgroundContents";

function ContactPage() {
	return (
		<div className = "w-100 h-100">
			<BackgroundContents />
		  	<div className = "d-flex row container w-100 h-100">
		  		<ContactForm/>
		  		<ContactList/>
		  	</div>
	  	</div>
	);
}

export default ContactPage;
