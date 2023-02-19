import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; //untuk redirect

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault(); //digunakan untuk agar ketika di submit tdak reload
    try {
      await axios.post('http://localhost:5000/users', {
        name,
        email,
        gender,
      });
      navigate('/'); // ketika di simpan maka akan  redirect ke halaman home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
          </div>
          <div className="control">
            <input type="text" className="input" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="field">
            <label className="label">Email</label>
          </div>
          <div className="control">
            <input type="text" className="input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="field">
            <label className="label">Gender</label>
          </div>
          <div className="control">
            <div className="select is-fullwidth">
              <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
