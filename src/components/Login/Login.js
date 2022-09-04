import React, { useState } from 'react';
import "./Login.css";
import SignIn from '../SignIn/SignIn';
// import { useForm } from "react-hook-form";

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    // const { sign, handleSubmit } = useForm(); 
    // const onSubmit = data => console.log(data);

  return (
      <div className="login_screen">
          <div className="login_background">
              <img
                  className='logo'
                  src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                  alt="Netflix Logo"
              />

              <button
                  className='login_btn'
                  onClick={() => setSignIn(true)}
              >
                  Ввійти
              </button>

              <div className='login_gradient'></div>
              <div className='login_body'>
                  {signIn ? (
                      <SignIn />
                  ) : (
                  <>
                  <h1>Фільми, серіали й інший контент без обмежень.</h1>
            
                    <h2>Дивіться будь-де. Скасувати підписку можна будь-коли.</h2>
            
                    <h3>Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.</h3>
                  
                  <div className='login_input'>
                    <form
                                    //   onSubmit={handleSubmit(onSubmit)}
                                  >
                          <input
                            type="email"
                            // {...sign("email")}
                            placeholder="Введіть ваш емейл" />
                          
                          <button
                              className='login_nextBtn'
                              onClick={() => setSignIn(true)}>
                              Далі
                          </button>
                      </form>
                              </div>
                              </>
)}
                  
              </div>
          </div>
      </div>
  )
}

export default Login;
