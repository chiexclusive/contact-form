/** @format */

// ========================== CONTACT PAGE =============================
// =====================================================================
import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import BackgroundContents from "../../components/BackgroundContents/BackgroundContents";
import { useState, useEffect } from "react";

function ContactPage() {
	const [contacts, setContacts] = useState(localStorage.getItem("xyz-contacts") || '[]');

  // USE EFFECT HOOK TO POPULATE CONTACT LIST FROM LOCAL STORAGE
  useEffect(() => {
	  localStorage.setItem("xyz-contacts", contacts);
  }, [contacts]);

  //   CALL BACK
  const updateContact = (contact) => {
	  let theContacts = JSON.parse(contacts);
	  theContacts.unshift(contact)
	  setContacts(JSON.stringify(theContacts))
  }

  return (
    <div className="w-100 h-100">
      <BackgroundContents />
      <div className="w-100 main container d-flex justify-content-center">
        <div className="w-100 row justify-content-center">
          <ContactForm updateContact={updateContact} />
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
