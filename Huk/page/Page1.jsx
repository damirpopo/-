import { Link } from "react-router-dom";
import { useState } from 'react';
import React from "react";
function Page1(props){
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')
  const [valid,setvalid]= useState(false)
  const nameRef = React.useRef(name);
  const passwordRef = React.useRef(password);

  React.useEffect(()=>{
    nameRef.current = name;
  },[name])
  React.useEffect(()=>{
    passwordRef.current = password;
  },[password])
  React.useEffect(()=>{
    const userName = localStorage.getItem('userName');
    const userPassword = localStorage.getItem('userPassword');
    if(userName!==null || userPassword!==null){
        setName(userName)
        setPassword(userPassword)
        
    }
    return()=>{
        console.log(nameRef.current);
        console.log(passwordRef.current);
        localStorage.setItem('userName',nameRef.current)
        localStorage.setItem('userPassword',passwordRef.current)
        
    }
  }, []);
  
  const nqme = 'admin';
  const nqmw = 'admin';

  React.useEffect(()=>{
    document.title=`${name}`
  })
 
  
  function formSubmit(event,props){
    event.preventDefault();
    if (name === nqme && password === nqmw){
      setvalid(true) 
    } else {
      alert ('неверные данные')
    }
  }


    return(<div>
        <div>
          <div>
          <nav>
        <ul>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/page2'> О нас</Link>
          </li>
          <li>
            <Link to='/page3'>Товары</Link>
          </li>
        </ul>
      </nav>
      <p>login: admin</p>
      <p>password: admin</p>
          </div>
          <div>
            <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder='name' className='inp' value={name}  onChange={event => setName(event.target.value)} /><br/>
                <input type="password" placeholder='password' className='inp' value={password} onChange={event => setPassword(event.target.value)} /><br/>
                <input type="submit" onClick={formSubmit}  value="Login"  className='btn'/>
            </form>
            {valid ? `здраствуйте  ${name}`:'вы ещё не авторезираваны'}
            </div>
          </div>
        </div>
      </div>
    )
}
export default Page1