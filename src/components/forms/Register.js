import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../store/actions/authActions';
import './Forms.css';

const Loading = () => (
  <div>
    <img src={require('./loading.svg')} />
  </div>
);

function Register() {
  const uid = useSelector(state => state.firebase.auth.uid);
  const MsgError = useSelector(state => state.auth.authError);
  const dispatch = useDispatch();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [name, setName] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (MsgError) {
      console.log(MsgError);
      setIsLoading(false);
      setIsHide(false);
    }
  }, [MsgError]);

  const onEmailChange = event => {
    setRegisterEmail(event.target.value);
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onPasswordChange = event => {
    setRegisterPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    setIsLoading(true);
    setIsHide(true);
    dispatch(
      register({ email: registerEmail, password: registerPassword, name: name })
    );
  };
  if (uid) return <Redirect to="/" />;
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <form
            autoComplete="off"
            id="sign_up"
            className="ba b--transparent ph0 mh0"
          >
            <h3 className="f1 fw6 ph0 mh0">Register</h3>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                aria-label="type name here"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                type="text"
                name="name"
                id="name"
                onChange={onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                aria-label="type email here"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                aria-label="type secret here"
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </form>
          <div className="">
            <input
              onClick={() => {
                setIsHide(true);
                onSubmitRegister();
              }}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
          {isLoading && <Loading />}
          {!isHide && <div>{MsgError}</div>}
        </div>
      </main>
    </article>
  );
}

export default Register;
