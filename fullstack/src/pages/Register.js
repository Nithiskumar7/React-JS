import React, { useState } from 'react'

export default function Register() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassWord]=useState('');
  
    const handleSubmit=(e)=>{
  
      e.preventDefault();

      console.log("FormSubmitted with data:");
      console.log("Name:",name);
      console.log("Email:",email);
      console.log("Password:",password)
   
    
  
      setName('');
      setEmail('');
      setPassWord('')
    };

    return (
        <>
            <div className="container w-25  my-4 ">
                <h1>Register here</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter youe username" required />
                        <label for="floatingInput">UserName</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" required />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword"  value={password} onChange={(e)=>setPassWord(e.target.value)} placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating  my-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="confirmPassword" />
                        <label for="floatingPassword">Confirm Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

