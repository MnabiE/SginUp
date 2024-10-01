import React, { useState } from 'react'

export default function SginUpForm() {

    const [formData, setFormData] = useState({
        name: '', email: ''
    })

    const handleChange = (event => {
        setFormData(...setFormData)
    });

    const submitForm = ((event) =>{
        
    })

    return (
        <div className='shadow-md flex flex-col bg-gray-200 p-10'>
            <h1 className='text-center px-5 text-2xl'>Sgin Up</h1>
            <form className='flex flex-col p-5 gap-2' onSubmit={submitForm} action="">
                <input className='rounded-full px-2 py-1' placeholder='Name' onChange={handleChange} value={formData.name} type="text" name="name" id="" />
                <input className='rounded-full px-2 py-1' placeholder='Email' onChange={handleChange} value={formData.email} type="text" name="name" id="" />
            </form>
            <button className='bg-lime-500 text-white px-2 py-1 rounded-full mx-16 hover:bg-rose-500'>Submit</button>
        </div>
    )
}
