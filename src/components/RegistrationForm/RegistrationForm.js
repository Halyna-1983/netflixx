import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    // const { register, handleSubmit } = useForm(); 
    const [page, setPage] = useState(0);
    const onSubmit = data => console.log(data);

    const FormInfo = ["Дивіться будь-де. Скасувати підписку можна будь-коли.", "Завершіть налаштування облікового запису", "Введіть пароль"]

    return (
        <>
            <h1>Фільми, серіали й інший контент без обмежень.</h1>
            
            <h2>{ FormInfo[page]}</h2>
            
            <h3>Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.</h3>
            

      <section>
            <form
                id="form"
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}>
                    
                <input
                    type="text"
                    name="email"
                    // {...register("email")}    
                    placeholder="Введіть ваш емейл" />
                    
                <button
                    type="submit"
                        className="buttonNext"
                        onClick={() => { setPage((currentPage) => currentPage + 1); }}
                    >Далі
                </button>    
          </form>

            </section>
            </>
    )
};

export default RegistrationForm;