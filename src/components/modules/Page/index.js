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


