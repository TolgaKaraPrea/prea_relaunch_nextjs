import {ThemeProvider} from "styled-components";
import Head from 'next/head'
import GlobalStyle from "../../../utils/styles/global";
import SEOHead from "./components/SEOHead";


const Page = ({theme, meta, children}) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEOHead title={meta.title} description={meta.description}/>

    {children}
  </ThemeProvider>
}

export default Page

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
