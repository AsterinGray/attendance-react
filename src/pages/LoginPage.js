import React, { useState } from 'react';

import attendance from '../api/attendance';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const errorMessage = {
    id: {
      empty: 'BNCCID may not be empty',
      invalid: 'BNCCID must in BNCC[0-9][0-9][0-9][0-9][0-9] format',
    },
    pass: 'Password may not be empty',
  };

  const validateId = (e) => {
    const idRegex = /BNCC[0-9][0-9][0-9][0-9][0-9]/;
    setId(e.target.value);
    console.log(e.target.value + ' ' + id);
    if (e.target.value.match(idRegex)) {
      setErr('');
      return true;
    } else if (e.target.value === '') {
      setErr(errorMessage.id.empty);

      console.log(id);
      return false;
    } else {
      setErr(errorMessage.id.invalid);
      return false;
    }
  };

  const validatePass = (e) => {
    setPass(e.target.value);
    if (pass === '') {
      setErr(errorMessage.pass);
    } else {
      setErr('');
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (id === '' || pass === '') {
      setErr(errorMessage.pass + errorMessage.id.empty);
    } else {
      setErr('');
    }
  };

  return (
    <div className="auth">
      <div className="card">
        <div className="content"></div>
        <form action="" className="form" onSubmit={onFormSubmit}>
          <div className="form-content">
            <label htmlFor="">BNCCID</label>
            <input
              type="text"
              className="input text-regular"
              onChange={(e) => validateId(e)}
            />
          </div>
          <div className="form-content">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="input text-regular"
              onChange={(e) => validatePass(e)}
            />
          </div>
          <p className="text-red">{err}</p>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
