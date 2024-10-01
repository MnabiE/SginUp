import React, { useState } from 'react'

export default function SginUpForm() {

    const [formData, setFormData] = useState({
        name: '', email: '', password: '', passwordConfirmation: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
        // const { name, value } = event.target;
        // setFormData((prevData) => ({
        //     ...prevData, [name]: value,
        // }
        // ))
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (!formData.name) {
            setErrors({ name: "Name is required" });
        } else if (formData.email === '') {
            setErrors({ email: "Email is required" });
        } else if (formData.password === '') {
            setErrors({ password: "Password is required" });
        } else if (formData.passwordConfirmation === '') {
            setErrors({ passwordConfirmation: "Password Confirmation is required" });
        } else {
            console.log(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password})`);
        }

    };

    return (
        <div className='shadow-md bg-gray-200 p-5'>
            <h1 className='text-center p-5 text-2xl'>Sgin Up</h1>
            <form className='flex flex-col p-5 gap-5' >
                <input className='rounded-full px-2 py-1' placeholder='Name' onChange={handleChange} value={formData.name} type="text" name="name" />
                <h1>{errors.name}</h1>
                <input className='rounded-full px-2 py-1' placeholder='Email' onChange={handleChange} value={formData.email} type="text" name="email" />
                <h1>{errors.email}</h1>
                <input className='rounded-full px-2 py-1' placeholder='Password' onChange={handleChange} value={formData.password} type="password" name="password"/>
                <h1>{errors.password}</h1>
                <input className='rounded-full px-2 py-1' placeholder='Password Confirmation' onChange={handleChange} value={formData.passwordConfirmation} type="password" name="passwordConfirmation"/>
                <h1>{errors.passwordConfirmation}</h1>
                <div className='flex flex-col'>
                    <button onClick={submitForm} className='bg-lime-500 text-white px-2 py-1 mt-5 mx-16 rounded-full hover:bg-rose-500'>Submit</button>
                </div>
            </form>
        </div>
    )
}
