import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contact = form.elements.contact.value;
    if (contact !== '') {
      dispatch(addContact(contact));
      form.reset();
      return;
    }
    alert('contact cannot be empty. Enter some contact!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

// import { useState } from 'react';
// import { Form, FormLabel, FormInput } from './ContactEditor.styled';
// import Button from '../Button/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import { Notify } from 'notiflix';
// import { selectAllContacts } from 'redux/contacts/selectors';

// Notify.init({ position: 'center-top' });

// export default function ContactEditor() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   // console.log(selectContacts);
//   const contacts = useSelector(selectAllContacts);

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };
//   const handleChekUnique = name => {
//     // console.log(contacts);
//     const isExistContact = !!contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     isExistContact && Notify.warning(name + ' is already in contacts');
//     return !isExistContact;
//   };

//   const handleAddContact = event => {
//     event.preventDefault();
//     if (handleChekUnique(name)) {
//       dispatch(addContact({ name, number }));
//       resetForm();
//     }
//   };

//   return (
//     <Form onSubmit={handleAddContact}>
//       <FormLabel>
//         Name
//         <FormInput
//           value={name}
//           onChange={handleChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </FormLabel>
//       <FormLabel>
//         Number
//         <FormInput
//           value={number}
//           onChange={handleChange}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </FormLabel>
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// }
