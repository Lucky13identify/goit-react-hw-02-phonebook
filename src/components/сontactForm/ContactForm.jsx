import PropTypes from 'prop-types';
import { Form, Button, Input } from './ContactForm.styled';

export const ContactForm = ({ submit, addItem }) => {
  return (
    <div className="container">
      <Form onSubmit={submit}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={addItem}
          required
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={addItem}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
      <Input type="text" name="filter" onChange={addItem}></Input>
    </div>
  );
};

ContactForm.propTypes = {
  submit: PropTypes.func,
  addItem: PropTypes.func,
};
