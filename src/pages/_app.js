import {IntlProvider} from 'react-intl';

function MyApp({ Component, pageProps }) {
  

  return (
    <IntlProvider locale="en">
        <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
