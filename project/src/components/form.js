import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import formimg from '../images/about1.jpg'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
import Login from './Login'

import '../components/form.css';
import Navbar from './Navbar';




const initialState = {
    name: '',
    email: '',
    address: '',
	pincode: '',
	phone: '', 
	password: '',
	confpassword: '',
};

const Register = () => {

    const [state, setState] = useState(initialState);

    const {name, email, address, pincode, phone, password, confpassword} = state;

    const navigate = useNavigate();

    // const {id} = useParams();

    // useEffect(() => {
    //   axios.get(`http://localhost:5000/api/get/${id}`)
    //   .then((resp) => setState({...resp.data[0]})); 
    // }, [id]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email)
        {
            toast.error("Enter Data");
        }
		else if(address.length<=20 || address.length>50){toast.error('Address Should be 20-50 characters');}
		else if(pincode.length!==6){toast.error("Invalid Pincode");}
		else if(phone.length!==10){toast.error('Invalid Mobile Number');}
		else if(password.length<6 || password.length>12){
			toast.error('Enter 6-12 digit Password');
		}
		else if(password!==confpassword)
		{
			toast.error("Password Not Matched");
		}
        else{
            axios.post('http://localhost:5000/api/post/register',{
                name,email,address, pincode, phone, password, confpassword
            }).then(() => {
                setState({name: '', email: '', address: '', pincode: '', phone: '', password: '', confpassword: '' });
            })
            .catch((err) => toast.error(err.response.data));

            toast.success("Successfully Registered");
			navigate('/login');
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
    <div className='signpage'> 
		<h1>SiGn Up !</h1>   
		<header className="FormApp-sign">
		<form onSubmit={handleSubmit}>
			<br/>
			<input className='ipt' type="text" id='name' name='name' value={name || ""} placeholder='Name' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="email" id='email' name='email' value={email || ""} placeholder='Email' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="text" id='address' name='address' value={address || ""} placeholder='Address' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="number" id='pincode' name='pincode' value={pincode || ""} placeholder='Pincode' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="number" id='phone' name='phone' value={phone || ""} placeholder='Mobile Number' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="password" id='password' name='password' value={password || ""} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Password' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<input className='ipt' type="password" id='confpassword' name='confpassword' value={confpassword || ""} placeholder='Confirm Password' required onChange={(e)=> {handleInputChange(e)}} /><br/>
			<br/>
			<div className='subut'><input className='btn' type="submit" value="SIGN UP"/>

			<Link to="/login" onClick={() => {<Login/>}}>
                <br/><p>Login here</p>
            </Link>
			</div>
			
		</form>
		</header>
	</div>
	</div>
	</div>
);
}

export default Register;