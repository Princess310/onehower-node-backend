import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import request from '../../utils/request';

import Container from '../../components/Container';
import Header from '../../components/Header';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChangeUsername = (e) => {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  }

  handleChangePassword = (e) => {
    const value = e.target.value;

    this.setState({
      password: value,
    });
  }

  handleSubmit = () => {
    const { username, password } = this.state;

    if (username.trim() === '' || password.trim() === '') {
      alert('username and password shoud not be empty!');
      return;
    }

    request.doPost('user/login', {
      username,
      password,
    }).then((res) => {
      const { result: { user, access_token } } = res;
      localStorage.setItem('access_token', access_token);
    });
  }

  render () {
    const { username, password } = this.props;

    return (
      <Container>
        <Head>
          <title>Register Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <div>
          <input type="text" placeholder="input username" value={username} onChange={this.handleChangeUsername} />
        </div>
        <div>
          <input type="password" placeholder="input password" value={password} onChange={this.handleChangePassword} />
        </div>
        <button onClick={this.handleSubmit}>Submit Info</button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
