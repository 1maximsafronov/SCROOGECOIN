import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, selectLoginStatus } from "../../store/user-slicer";

const LoginModal = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus)

  useEffect(() => {
    if (loginStatus?.status == 'error') {
      setErrorMessage(loginStatus.message);
    }
  }, [loginStatus?.status])

  const handleFormSubmite = (evt) => {
    setErrorMessage('');
    evt.preventDefault();
    const { email, password } = evt.target;

    const formData = {
      email: email.value,
      password: password.value
    }

    if (!formData.email || !formData.password) {
      setErrorMessage('Please enter an email and password');
      return;
    }

    dispatch(login({
      email: formData.email,
      password: formData.password
    }))

  }

  if (!props.opened) {
    return null;
  }

  return (
    <div className={`modal login-modal ${props.opened && 'modal--show'}`}>
      <div className="modal__overlay">
        <div className="modal__content">
          <button className="modal__close-button" onClick={props.onClose} />
          <h2 className="modal__title">Авторизация</h2>
          <form className="login-modal__form" action="#" onSubmit={handleFormSubmite}>
            <input className="custom-input login-modal__input" type="email" name="email" id="login-form-email" placeholder="Эл. почта" required />
            <input className="custom-input login-modal__input" type="password" name="password" id="login-form-password" placeholder="Пароль" required />
            <p className="login-modal__error">{errorMessage}</p>
            <button className="login-modal__button" type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal;
