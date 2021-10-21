import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import enMessages from '@locales/en/en.json';
import deMessages from '@locales/de/de.json';
import { useEffect, useState } from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (locale === 'de') setMessage(deMessages);
    if (locale === 'en') setMessage(enMessages);
    console.log('HERE! ');
    console.log(message, 'message');
  });


  return (
    <IntlProvider locale={locale} messages={Object.keys(message).length > 0 ? message : deMessages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  console.log(ctx, 'getInitialProps');
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return { pageProps };
  } else {
    return {};
  }
};
export default MyApp;
