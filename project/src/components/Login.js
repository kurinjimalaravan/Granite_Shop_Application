import React, { useState, useEffect } from 'react';
import formimg from '../images/about1.jpg'
import {Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';


import '../components/login.css';
import Navbar from './Navbar';



const initialState = {
    email: '',
    password: ''
};

function Login() {

	const [state, setState] = useState(initialState);

	const [user, setUser] = useState({});

    const {id} = useParams();

	const{email,password} = state;
	const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

	  

	  const handleSubmit=(e)=>{
			
			e.preventDefault();
			let flag=0;
			
			for(let i=0;i<user.length;i++){
				if(email ===user[i].email && password ===user[i].password){
					
					flag=1;
					break;
				}
			}
			if(flag===1){
				// props.loged=1;
				toast.success("Login Successfull");
				navigate('/product');
			}else{
				// props.loged=0;
				toast.error("Invalid Login");
			}
		}

		const handleInputChange = (e) => {
			    const {name, value} = e.target;
			    setState({ ...state, [name]: value});
			};
return (
	<div>
		<Navbar />
	<div className="FormApp">
		
	<div className='formimg'>
		<img src={formimg} alt='img'/>
	</div>
    <div className='formpage'> 
		<h1>LoG iN !</h1>   
		<header className="FormApp-header">
		<form onSubmit={handleSubmit}>
		
		
			<br/>
			<input className='ipt' id='email' name='email' type="email" value={email || ''} placeholder='Email' onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			
			<input className='ipt' id='password' name='password' type="password" value={password || ''} placeholder='Password' onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<div className='subbut'><input className='btn' type="submit" value="LOGIN"/>
			
			<Link to="/signup">
                <br/><p>Signup here</p>
            </Link>
			</div>
		</form>
		</header>
	</div>
	</div>
	</div>
);
}

export default Login;