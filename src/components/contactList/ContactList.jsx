import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';

export const ContactList = ({ arr, deleteF }) => {
  return arr.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <Button onClick={() => deleteF(id)}>Delete</Button>
    </li>
  ));
};

ContactList.propTypes = {
  submit: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteF: PropTypes.func,
};
