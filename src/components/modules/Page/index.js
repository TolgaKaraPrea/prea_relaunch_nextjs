import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../utils/styles/global';
import SEOHead from './components/SEOHead';
import Footer from '../Footer';
import PageLayout from '../../layout/PageLayout';
import Navigation from '../Navigation';

const Page = ({ theme, meta, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEOHead title={meta.title} description={meta.description} />

      <PageLayout>
        <Navigation />
        {children}
        <Footer />
      </PageLayout>
    </ThemeProvider>
  );
};

export default Page;

/*const usePreaIntl = () => {
  const intl = useIntl();
  const isMobile = useResponsive();

  const preaFormatMessage = useCallback((messageId) => {
    return isMobile ? intl.formatMessage(`mobile__${messageId}`) : intl.formatMessage(`desktop__${messageId}`)
  } )
}

'de_m'
'de_d'
'en_m'

desktop__save: 'Speichern'
mobile__save: 'Speich'*/
