import { ListOfContact, Container, ContactItem, Button } from './ContactList.module';
import { PropTypes } from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => {
  console.log(deleteContact);
  return (
    <Container>
      <h2>My contacts</h2>
      {contacts.map(contact => (
        <ListOfContact key={contact.id}>
          <ContactItem>
            {contact.name}: {contact.number}{' '}
            <Button
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </Button>
          </ContactItem>
        </ListOfContact>
      ))}
    </Container>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
