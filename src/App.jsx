
import { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div>
      <h1>User CRUD System</h1>
      <UserList />
      <button onClick={() => setEditingUser({})}>Add User</button>
      {editingUser && (
        <UserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default App;
