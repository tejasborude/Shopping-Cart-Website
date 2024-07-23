import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    let login=()=>{
        alert("Login Successfully...!")
        navigate("/")
        console.log("Login Successfully..!")
    }

    return (
        <div className='l-div'>
            <h2 className='l-head'>Login..?</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='lab'>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                           className='l-input'
                           placeholder='User Username...!'
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '1em' }}>
                    <label className='lab'>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='l-input'
                        placeholder='Enter Password...!'
                        />
                    </label>
                </div>
                <button type="submit" onClick={()=>{login()}}>Login</button>
            </form>
        </div>
    );
};


