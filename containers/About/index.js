import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { fetchData } from '../Index/actions';

class About extends React.Component {
  static async getInitialProps({ store }) {
    // we can do asyn actions in sagas
    store.dispatch(fetchData());
  }

  render () {
    const { info } = this.props;

    return (
      <Container>
        <Head>
          <title>About Page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <section>
          Username : {info.username || 'no name here'}
        </section>
        <section>
          Age: {info.age || 'no age here'}
        </section>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);