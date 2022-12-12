import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'


import './order.css'
import Footer from '../../Footer';
import Navbar from '../../Navbar';


const initialState = {
    email: '',
    contact: '',
    message: '',
    pdtname: '',
    size: '',
    color: '',
    quantity:'',
    date: '',
  };


const Order = () => {

  const [state, setState] = useState(initialState);

  const {email, contact, message, pdtname, size, color, quantity, date} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !size  || !pdtname || !date)
    {
        toast.error("Enter all Fields");
    }
    else if(contact.length!==10){
      toast.error("Enter Valid Contact Number");
    }
    else if(message.length>30){
      toast.error("Message Length Should be less than 30");
    }
    
    else if(quantity>1000||quantity<=0){
      toast.error("Enter Quantity between 1 to 15");
    }
    else{
        axios.post('http://localhost:5000/api/post/book',{
          email,contact,message,pdtname,size,color,quantity,date
        }).then(() => {
          setState({email: '', contact: '', message: '',pdtname: '', size: '', color:'', quantity:'', date: '' });
         })
        .catch((err) => toast.error(err.response.data));
        toast.success("Your Order is Confirmed !!");
      navigate('/order');
    }
            
    }


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value});
  };

  return (
    <div>
      <Navbar />
      <div className='order'> 
      <br/><br/>
        <h1>Book Your Order !!</h1>   
        <p>*For Booking  ₹ 5000  has to be paid as Prior*</p>
        <header className="FormApp-sign">
        <form onSubmit={handleSubmit}>
          <br/>
          <input className='ipt' type="text" id='email' name='email' value={email || ""} placeholder='Email' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="number" id='contact' name='contact' value={contact || ""} placeholder='Contact' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='message' name='message' value={message || ""} placeholder='Product Brand and Type' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='pdtname' name='pdtname' value={pdtname || ""} placeholder='Product' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='size' name='size' value={size || ""} placeholder='Feet Size in Length - Breath - Height' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='color' name='color' value={color || ""} placeholder='Product Color' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="number" id='quantity' name='quantity' value={quantity || ""} placeholder='Quantity' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type='date' id='date' name='date' placeholder='DATE' value={date || ""} onChange={handleInputChange} />
          <br/><br/>
          <input className='btn' type="submit" value="SUBMIT"/>
          <br/><br/>
          <div className='submbut'><a href="https://rzp.io/l/zBk3wHju"> Make Payment</a></div>
          
        </form>
        </header>
	    </div>
    <Footer/>
    </div>
  )
}

export default Order
