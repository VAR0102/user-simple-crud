
import  { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../features/users/usersSlice';

const UserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user ? user.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.id) {
      dispatch(updateUser({ ...user, name }));
    } else {
      dispatch(addUser({ name }));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">{ 'Add'}</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

UserForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired
};

export default UserForm;
