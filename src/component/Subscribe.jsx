import React,{useState} from 'react';
import './style.css';


const Subscribe = () => {
const [email,setEmail]=useState("");

const changeHandler = (e) =>{
  setEmail(e.target.value);
}

  return(
    <>
    <div className="subsciber">
    <form onSubmit={}>
   <input type='email' onChange={changeHandler}/>
  <input type="submit" value="submit"/>
   </form>
   </div>
    </>
  )
}

export default Subscribe;