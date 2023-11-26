import React from 'react';
import "./Form.css";

const Form = () => {
    return (
        <>
            <div className="registration-form">
                <form>
                    <div className="form-icon">
                        <span><i className="bi bi-person-circle"></i></span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-block create-account">Crear Cuenta</button>
                    </div>
                    <div classNameName='text-center'>
                    <a href='/login' classNameName='text-white'>Volver al Login</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;