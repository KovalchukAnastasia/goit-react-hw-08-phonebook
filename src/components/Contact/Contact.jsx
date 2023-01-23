import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contact.module.css';

export const Contact = ({ id, contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      {' '}
      <p className={css.contact}> {contact}</p>{' '}
      <button type="button" className={css.button} onClick={handleDelete}>
        {' '}
        Delete{' '}
      </button>{' '}
    </div>
  );
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '../Button/Button';
// import { List, ListItem, ListText } from './Contact.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts, deleteContact } from 'redux/contacts/operations';
// import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
// import { useEffect } from 'react';

// export default function Contact() {
//   const contacts = useSelector(selectAllContacts);
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   const filteredContacts = getFilteredContacts();

//   return (
//     <List>
//       {/* {isLoading && (
//       )} */}

//       {filteredContacts.map(({ id, name, number }) => (
//         <ListItem key={id}>
//           <ListText>
//             {name}: {number}
//           </ListText>
//           <Button type="button" onClick={() => dispatch(deleteContact(id))}>
//             Delete
//           </Button>
//         </ListItem>
//       ))}
//     </List>
//   );
// }

// Contact.propTypes = {
//   contacts: PropTypes.array,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   deleteContact: PropTypes.func,
// };
