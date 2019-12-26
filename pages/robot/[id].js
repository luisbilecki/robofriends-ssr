import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import Link from 'next/link';
import Page from '../../layouts/main';
import Header from '../../components/Header';

class Robot extends Component {
  static async getInitialProps(props) {
    const robotId = props.query && props.query.id;

    // Fetch robot data
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${robotId}`);
    const data = await res.json();

    return {
      robot: data,
    }
  }

  render() {
    const { robot } = this.props;

    return (
      <Page>
        <Header />
        <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${robot.id}?size=200x200`} />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
                <p className='b'>Address:</p>
                <p>{robot.address.street}, {robot.address.suite}</p>
                <p>{robot.address.city},</p>
                <p>{robot.address.zipcode}</p>
                <br />
                <Link href='/'>
                  Back
                </Link>
            </div>
        </div>
      </Page>
    );
  }
}

export default Robot;
