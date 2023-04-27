import React, { useState } from 'react';

function UserData() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Data</h2>
      <div>
        <div>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <input
            type='text'
            id='country'
            name='country'
            value={formData.country}
            onChange={handleInputChange}
          />
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
            value={formData.city}
            onChange={handleInputChange}
          />
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default UserData;
