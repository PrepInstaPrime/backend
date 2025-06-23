import React, { useState } from 'react'
import styles from './App.module.css'
import axios from 'axios'
export default function App() {
  let [user, setUser]= useState("");
  let [email, setEmail]= useState("");
  let [password, setPassword]= useState("");
  let [cpass, setCpass]= useState("");
  let [phone, setPhone]= useState("");
  let [age, setAge]= useState("");
  let [err, setErr]= useState("");
  let handleChange=(e)=>{
      let name= e.target.name;
      let val= e.target.value;
      if(name==='user'){
        setUser(val);
      }else if(name==='email'){
        setEmail(val);
      }else if(name==='pass'){
        setPassword(val);
      }else if(name==='cpass'){
        setCpass(val);
      }else if(name==='phone'){
        setPhone(val);
      }else{
        setAge(val);
      }
  }
  let handleSubmit= async (e)=>{
    e.preventDefault();
    if(!user){
      setErr("Please enter the user name");
      return;
    }
    if(!email){
      setErr("Please enter the email");
      return;
    }
    if(!password){
      setErr("Please enter the password")
      return;
    }
    if(!cpass){
      setErr("Please confirm your password");
      return;
    }
    if(password!==cpass){
      setErr("confirm password is not same")
      return;
    }
    if(!phone){
      setErr("Please enter the Phone number");
      return;
    }
    if(!age){
      setErr("Please enter your age")
    }
    try {
      // linking backend and sending data to backend
      let response= await axios.post("http://localhost:8000/register",{user, email, password, phone, age}, {headers:{"Content-Type":"application/json"}})
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
    console.log();
    setErr("")
    setUser("");
    setEmail("");
    setPassword("");
    setCpass("");
    setPhone("");
    setAge("");
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {err&&<p>{err}</p>}
        <input type='text' name='user' placeholder='Enter User Name' value={user}  className={styles.input} onChange={handleChange}/>
        <input type='email' name='email' placeholder='Enter your Email' value={email} className={styles.input} onChange={handleChange}/>
        <input type='password' name='pass' placeholder='Enter your password' value={password}  className={styles.input} onChange={handleChange}/>
        <input type='password' name='cpass' value={cpass} placeholder='Confirm password' className={styles.input} onChange={handleChange}/>
        <input type='number' name='age' value={age} placeholder='Enter your age' className={styles.input} onChange={handleChange}/>
        <input type='text' name='phone'  value={phone} placeholder='Enter your phone number' className={styles.input} onChange={handleChange}/>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}
