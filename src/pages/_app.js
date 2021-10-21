import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import enMessages from '@locales/en/en.json';
import deMessages from '@locales/de/de.json';

function MyApp({ Component, pageProps, localMessage }) {
  const { locale } = useRouter();
  // console.log(localMessage, 'localMessage from props');

  return (
    <IntlProvider locale={locale} messages={localMessage}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  if (ctx) {
    const localMessage = ctx.locale === 'en' ? enMessages : deMessages;
    return { localMessage };
  } else {
    return {};
  }
};
export default MyApp;
