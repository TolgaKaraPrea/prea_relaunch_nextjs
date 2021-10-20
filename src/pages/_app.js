import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import enMessages from '@locales/en/en.json';
import deMessages from '@locales/de/de.json';
import { useEffect, useState } from 'react';

// const messages = {
//   en: enMessages,
//   de: deMessages,
// }

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [message, setMessage] = useState({});
  console.log(locale, 'locale');
  // console.log(messages[locale], '0000')
  // const test = locale === 'de' ? 'de' : locale === 'en' ? 'en' : 'en';
  useEffect(() => {
    if (locale === 'de') setMessage(deMessages);
    if (locale === 'en') setMessage(enMessages);
    console.log('here');
    console.log(message, 'message');
  });

  // console.log(props, 'props');
  // const newLocal = locale === 'de' ? deMessages : locale === 'en' ? enMessages : enMessages;
  // useEffect(() => {
  // console.log(newLocal, 'landMessages=======');
  //   setLandMessages(newLocal, 'newLocal');
  //   console.log(landMessages, 'landMessages=======');
  // }, [locale]);
  // <IntlProvider locale={locale} messages={messages[locale]}>
  return (
    <IntlProvider locale={locale} messages={message}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;

export const getStaticPaths = ({ locale }) => {
  console.log(locale, 'in hererere');
  return {
    props: 'hi'
  };
};
