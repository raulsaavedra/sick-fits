import NextNProgress from 'nextjs-progressbar';
import Page from '../components/Page';

function MyApp({ Component, pageProps }: any) {
  return (
    <Page>
      <NextNProgress color="red" />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
