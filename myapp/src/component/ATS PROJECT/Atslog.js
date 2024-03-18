import React from 'react'
import {Button, Typography ,Link} from '@mui/material'
import './Atslogin.css'
import Ats from '../ATS PROJECT/Ats.jpeg'
import computer from '../ATS PROJECT/computer.jpeg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Atss = () => {
  const btnstyle={margin:'5px 0',color:"white"}
  const [email, setemail]= useState('');
  const [password, setPassword]= useState('');

       const navigate =useNavigate()

  const handleEmailChange =(event)=>{
    setemail(event.target.value);
  };
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  };
  
  const hii = () => {
    navigate('/Register');

  }
 return (
 <div className='container'>
          <div className="col-1">
                <img src={computer} alt="Register" />
          </div>
            
        <div className='col-2'>
             <div align='center' style={{marginTop:'-35px'}}>

              <div>
                  <div className='img'><img src={Ats} alt="Atss"/></div></div>
      
                  <div>
                  <h2>Login</h2>
                  </div>
                
             </div>
                  <label>
                    <input type='email' name="email"placeholder='enter your mail id' value={email} onChange={handleEmailChange}  required style={{margin:10,width:"300px",padding:'8px'}}/> 
                  </label>
                  <div align="center">
                  <label>
                    <input type='password' name='password' placeholder='enter your password'  value={password} onChange={handlePasswordChange} fullwidth required style={{margin:10 ,width:"300px",padding:'8px'}}/>
                  </label>
                  </div>
                  <div>
                <Typography> 
              <Link href="#" underline='none' style={{textAlign:'left',marginLeft:"215px"}}>
               Reset password
              </Link>
            </Typography>
            </div>
            <br></br> 
              <div>
             <Button className='btn'  type='submit' color='primary'  variant='contained' style={btnstyle}fullWidth>Log in</Button>
             </div>

            <div>
            <Typography> 
             
              <Link to='/Register' onClick={hii} underline="none"style={{ textAlign: 'left', marginLeft: "280px" }}>
  register
</Link>
            </Typography>
            </div>
            <br></br>
         </div>
      </div>
  
     
  )
}
export default Atss