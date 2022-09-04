import React, { useRef, useState } from 'react';
import "./SignIn.css";
import MainScreen from '../MainScreen/MainScreen';
// import { useForm } from "react-hook-form";

const SignIn = () => {
    const [mainScreen, setMainScreen] = useState(false);
// const { sign, handleSubmit } = useForm();
// const onSubmit = data => console.log(data);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

const register = (e) => {
    e.preventDefault();
    
// auth.createWithEmailAndPassword()
    };
const signIn = (e) => {
        e.preventDefault();
    };

    return (
      <>
       <div className='signIn'>
          <form
            //   onSubmit={handleSubmit(onSubmit)}
          >
              <h1>Увійти</h1>
              <input
                  type="email"
                  ref={ emailRef}
                //   {...sign("email")}
                  placeholder="Введіть ваш емейл">
              </input>

              <input
                  type="password"
                  ref={ passwordRef}
                  placeholder="Введіть пароль">
              </input>

              <button
                  type="submit"
                   onClick={() => setMainScreen(true)}>
                  Увійти
              </button> 

              <h4>
                  <span className='gray'>Вперше на Netflix?</span>
                  <span
                      className='signIn_link'
                      onClick={register}>
                      Зареєструватися зараз.
                  </span>
              </h4>
          </form>
        </div>
      
        <div>{mainScreen ? (
            <MainScreen />
            ) : (
                <>
                    <h1>Зареєструйтеся будь ласка</h1>
                </>
            )
            }
                </div>
          
    </>
  )
}

export default SignIn;