import React from 'react'
import { useState } from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom';
// import contact from "./contact.avif";


export default function Contact(){

    let navigate=useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    let sub=()=>{
        alert("Submit Successfully...!")
        console.log("Submit successfully..!")
        navigate('/')
    }

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.message) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission
            console.log('Form submitted:', formData);
        }
    };



    return (
        <div className="contact-container" >
            <h2 style={{textAlign:"center"}}>Contact Us..?</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='fs-5'>Name :</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter Name ...! '
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label className='fs-5'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter E-Mail...!'
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className='fs-5'>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Enter Message ...!'
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" onClick={()=>sub()}>Submit</button>
            </form>
        </div>
    );
};

