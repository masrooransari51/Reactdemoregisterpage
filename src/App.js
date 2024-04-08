import React, { useState } from 'react';

function Form() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    Hobbies: '',
  });
  const [errors, setErrors] = useState({
    phoneNumber: '',
  });
  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validatePhoneNumber(formData.phoneNumber)) {
      console.log(formData);
      setErrors({ phoneNumber: '' });
    } else {
      setErrors({ phoneNumber: 'Invalid phone number' });
    }
    // You can perform further actions here, like sending the form data to a server
   
  };
  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression to match Indian mobile numbers
    const indianRegex = /^[6-9]\d{9}$/;

    // Regular expression to match Pakistani mobile numbers
    const pakistaniRegex = /^03[0-9]{9}$/;

    return indianRegex.test(phoneNumber) || pakistaniRegex.test(phoneNumber);
  };
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form">
      
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}
        />
      </label>
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      <br />
      <label>
        Hobbies:
        <input type="text" name="Hobbies" value={formData.Hobbies} onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div className="form-data" >
        <h2>Form Data:</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Mobile Number: {formData.phoneNumber}</p>
        <p>Hobbies: {formData.Hobbies}</p>
      </div>
    </div>
  );
}

export default Form;
