import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import English from '@locales/en/en.json';
import German from '@locales/de/de.json';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  let lang = locale === 'de' ? German : locale === 'en' ? English : English;

 
  return (
    <IntlProvider locale={locale} messages={lang}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
