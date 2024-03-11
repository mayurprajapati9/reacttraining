import React, { Component } from 'react';

class UserManagement extends Component {
  constructor(props) {
    super(props);

    // Load existing users from LocalStorage on component mount
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || [],
      name: '',
      gender: '',
      editingIndex: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addUser = () => {
    const { name, gender, users, editingIndex } = this.state;

    if (editingIndex !== null) {
      // Editing existing user
      users[editingIndex] = { name, gender };
    } else {
      // Adding new user
      users.push({ name, gender });
    }

    // Update LocalStorage and reset form
    localStorage.setItem('users', JSON.stringify(users));
    this.setState({ users, name: '', gender: 'male', editingIndex: null });
  };

  editUser = (index) => {
    const { users } = this.state;
    const { name, gender } = users[index];

    // Set form fields for editing
    this.setState({ name, gender, editingIndex: index });
  };

  deleteUser = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const { users } = this.state;
      users.splice(index, 1);

      // Update LocalStorage and reset form
      localStorage.setItem('users', JSON.stringify(users));
      this.setState({ users, name: '', gender: 'male', editingIndex: null });
    }
  };

  render() {
    const { name, gender, users } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <h2>User Management</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input className='border-2 border-black p-1 rounded ml-2 m-2' type="text" id="name" value={name} onChange={this.handleChange} required />

          <label htmlFor="gender">Gender:</label>
          <select className='border-2 border-black p-1 rounded ml-2' id="gender" value={gender} onChange={this.handleChange} required>
            <option value="">--Select any one--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-1' type="button" onClick={this.addUser}>
            {this.state.editingIndex !== null ? 'Update User' : 'Add User'}
          </button>
        </form>
          <br/>
        <table border="1" style={{ width: '70%', margin: 'auto' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='border-2 border-black rounded-md'>
            {users.map((user, index) => (
              <tr className='border-2 border-black ' key={index}>
                <td className='p-2'>{index+1}</td>
                <td className='p-2'>{user.name}</td>
                <td  className='p-2'>{user.gender}</td>
                <td  className='p-2'>
                  <button className='p-2 bg-green-200 px-10 rounded font-semibold' onClick={() => this.editUser(index)}>Edit</button>
                </td>
                <td  className='p-2'>
                  <button className='p-2 bg-red-200 px-10 rounded font-semibold ' onClick={() => this.deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserManagement;
