import React from 'react';
import Head from 'next/head';
import Router from 'next/router'
import { connect } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import { changeInfo } from './actions';

class Index extends React.Component {
  constructor(props) {
    super(props);

    const { info } = props;
    this.state = {
      username: info.username || '',
      age: info.age || '',
    };
  }

  handleChangeUsername = (e) => {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  }

  handleChangeAge = (e) => {
    const value = e.target.value;

    this.setState({
      age: value,
    });
  }

  handleSubmit = () => {
    const { username, age } = this.state;

    this.props.changeInfo({
      username,
      age,
    });

    Router.push('/about');
  }

  render () {
    const { username, age } = this.state;

    return (
      <Container>
        <Head>
          <title>Index Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <div>
          <input type="text" placeholder="input username" value={username} onChange={this.handleChangeUsername} />
        </div>
        <div>
          <input type="number" placeholder="input age" value={age} onChange={this.handleChangeAge} />
        </div>
        <button onClick={this.handleSubmit}>Submit Info</button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.index.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInfo: (info) => dispatch(changeInfo(info)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);