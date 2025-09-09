import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function Login() {

    return (
        <div style={{border: '1px solid black', padding:'30px',width:'400px'}}>
            <h2 style={{textAlign:'center'}}>Login account</h2>
            <label htmlFor="">Your email</label><br />
            <input style={{backgroundColor:'white', width:'100%', padding:'5px', borderRadius:"5px", opacity:"0.7"}} type="text" placeholder='name@company.com' /><br />
            <label style={{marginTop:'10px'}} htmlFor="">Password</label><br />
            <input style={{backgroundColor:'white', width:'100%', padding:'5px', borderRadius:"5px", opacity:"0.7"}} type="password" placeholder='********' /><br />
            <Button style={{width:'100%', marginTop:'10px'}} variant="primary">Login an account</Button><br />
            <p style={{textAlign:'center',marginTop:'20px', opacity:'0.7'}}>Already have an account? <b>Register here</b></p>
        </div>
    )
}

export default Login
