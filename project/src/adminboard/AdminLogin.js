import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

import './adminlogin.css';


const initialState = {
    adminname: '',
    password: ''
};

function Login() {
	const [state, setState] = useState(initialState);

	const [user, setUser] = useState({});

    const {id} = useParams();

	const{adminname, password} = state;
	const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/adminlogin`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

	  

	  const handleSubmit=(e)=>{
			e.preventDefault();
            let flag=0;
			for(let i=0;i<user.length;i++){
				if(adminname ===user[i].adminname && password ===user[i].password){
					
					flag=1;
					break;
				}
			}
			if(flag===1){
				toast.success("Login Successfull");
				navigate('/admindashboard');
			}else{
				toast.error("Invalid Login");
			}
		}

		const handleInputChange = (e) => {
			    const {name, value} = e.target;
			    setState({ ...state, [name]: value});
			};
return (
	<div>
    <div className='adminlogin'>   
    <h3 className='loginhead'>ADMIN LOGIN !!</h3>
		<form className='adminlogform' onSubmit={handleSubmit}>
		
            
			<br/>
            <label>Admin Name</label><br/>
			<input className='ipt' id='adminname' name='adminname' type="adminname" value={adminname || ''} placeholder='Eamil' onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<label>Password</label><br/>
			<input className='ipt' id='password' name='password' type="password" value={password || ''} placeholder='Password' onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='btn' type="submit" value="LOGIN"/>
			
		</form>
	</div>
	</div>
);
}

export default Login;