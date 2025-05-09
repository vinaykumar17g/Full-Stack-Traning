import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({ email: "admin@gmail.com", name: "admin", phone: "39845948354", password: "234",isVerified:true});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let api = await fetch("http://localhost:5000/user/create-user",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(formData)
    });
    let response = await api.json();
    console.log(response);
  }
  return (
    <>
      <div className='container m-4'>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit}>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control"
              value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4" >
            <input type="password" id="form2Example2" className="form-control" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="number" id="form2Example3" className="form-control" value={formData.phone} name="phone" onChange={(e) => handleChange(e)}/>
            <label className="form-label" htmlFor="form2Example3">
              Phone
            </label>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input type="text" id="form2Example4" className="form-control" value={formData.name} name="name" onChange={(e) => handleChange(e)}/>
            <label className="form-label" htmlFor="form2Example4">
              Name
            </label>
          </div>
          <button
            type="submit"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-primary btn-block mb-4">
            Sign up
          </button>
          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup