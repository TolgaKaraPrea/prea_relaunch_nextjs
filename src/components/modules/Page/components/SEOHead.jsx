import Head from "next/head";
const SEOHead = ({title, description}) => {
  return <Head>
      <title>{title}</title>
      <meta name="description" content={'Hello to the index'}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  </Head>
}

export default SEOHead
