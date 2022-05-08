import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

 const Login = ({ setUser }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
 
   const navigate = useNavigate();
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!name || !email) return;
     setUser({ name: name, email: email });
     navigate('/dashboard');
   };
}