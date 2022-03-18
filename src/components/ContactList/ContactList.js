/** @format */

// ============================CONTACT FORM COMPONENT==============================
// ================================================================================

import "./ContactList.css";

function ContactList({contacts}) {

  return (
    <div className="contact-list col-xs-12 col-sm-12 col-md-12 col-lg-6 row justify-content-end">
      <div className="col-xs-12 col-sm-12 col-md-11 card p-3">
        <header className="w-100 d-flex justify-content-center align-items-center flex-column">
          <h5>Contact list</h5>
        </header>
        <section className="w-100">
          <table className="w-100 table table-responsive table-borderless">
            <thead>
              <tr>
                <td>Email</td>
                <td>Country</td>
                <td>State</td>
                <td>City</td>
              </tr>
            </thead>
			<tbody>
				{
					JSON.parse(contacts).map((contact, contactIndex) => {
						return (
							<tr key={ contactIndex}>
								<td>{contact.email}</td>
								<td>{contact.country}</td>
								<td>{contact.state}</td>
								<td>{contact.city || '-'}</td>
							</tr>
            			);
					})
				}
			</tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default ContactList;
