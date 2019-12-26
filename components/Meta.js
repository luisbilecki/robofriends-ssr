import Head from 'next/head';

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%); /* w3c */
        }
    `}</style>
  </div>
);

export default Meta;