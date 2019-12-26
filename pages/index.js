import Page from '../layouts/main';
import fetch from 'isomorphic-unfetch';
import Robots from '../components/Robots';

const Index = (props) => (
  <Page>
    <Robots data={props.robots}/>
  </Page>
);

Index.getInitialProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
      robots: data,
  };
};

export default Index;
