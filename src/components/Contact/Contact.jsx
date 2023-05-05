import { Contact } from './Contact.styled';
import PropTypes from 'prop-types';

export const ItemContact = ({ contact }) => {
  return (
    <>
      <Contact type="button" name={contact.name}>
        {contact.name} : {contact.phone}
      </Contact>
    </>
  );
};
ItemContact.prototype = {
  contact: PropTypes.object,
};
