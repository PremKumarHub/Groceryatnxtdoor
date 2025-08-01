import React, { useState } from 'react';
import { assets } from '../assets/assets';

// Input component
const InputField = ({ type, placeholder, name, value,address, handleChange }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500 rounded outline-none text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    name={name}
    address={address}
    value={value}
    handleChange={handleChange}
  />
);

function AddAdress() {
  const [address, setAddresses] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(address); // To verify form data
  };

  return (
    <div className='mt-16 pb-16'>
      <p>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>

            <div className='grid grid-cols-2 gap-4'>
              <InputField
                address={address}
                name='firstName'
                type='text'
                placeholder='First name'
                value={address.firstName}
                handleChange={handleChange}
              />
              <InputField
                address={address}
                name='lastName'
                type='text'
                placeholder='Last name'
                value={address.lastName}
                handleChange={handleChange}
              />
            </div>
            <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder="Email address"/>
            {/* Add more input fields here as needed */}
            <InputField handleChange={handleChange} address={address} name="Street" type='text' placeholder="Street"/>
          <div className='grid grid-cols-2 gap-4'>
             <InputField handleChange={handleChange} address={address} name="City" type='text' placeholder="City"/>
              <InputField handleChange={handleChange} address={address} name="Country" type='text' placeholder="Country"/>
          </div>
          <div className='grid grid-cols-2 gap-4'>
             <InputField handleChange={handleChange} address={address} name="Zipcode" type='number' placeholder="Zipcode"/>
              <InputField handleChange={handleChange} address={address} name="State" type='text' placeholder="State"/>
          </div>
           <InputField handleChange={handleChange} address={address} name="Phone" type='number' placeholder="Phone"/>
           <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'>
            Save address
           </button>
          </form>
        </div>
        <img
          className='md:mr-16 mb-16 md:mt-0'
          src={assets.add_address_iamge}
          alt='Add Address'
        />
      </div>
    </div>
  );
}

export default AddAdress;
