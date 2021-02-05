import React, { Component } from 'react';

class RegisterPage extends Component {
  state = {
    id: '',
    name: '',
    password: '',
    confirm: '',
  };

  conFormSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.get('http://127.0.0.1:5000/api/register/', {
    //   auth: {
    //     username: this.state.username,
    //     password: this.state.password,
    //   },
    // });
  };

  render() {
    return (
      <div className="auth">
        <div className="card">
          <div className="content">
            <h3 className="text-bold">Register</h3>
            <h1 className="text-black">Attandance</h1>
            <p className="text-medium">Learning and Training</p>
          </div>
          <form className="form" onSubmit={this.onFormSubmit}>
            <div className="form-content">
              <label>BNCC ID</label>
              <input
                className="input text-regular"
                type="text"
                onChange={(e) => this.setState({ name: e.target.id })}
                value={this.state.id}
              />
            </div>
            <div className="form-content">
              <label>Name</label>
              <input
                className="input text-regular"
                type="text"
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
            </div>
            <div className="form-content">
              <label>Password</label>
              <input
                className="input text-regular"
                type="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </div>
            <div className="form-content">
              <label>Confirm Password</label>
              <input
                className="input text-regular"
                type="Password"
                onChange={(e) => this.setState({ confirm: e.target.value })}
                value={this.state.confirm}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
