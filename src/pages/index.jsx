import Page from "../components/modules/Page";
import {lightTheme} from "../utils/styles/themes";
import HomeOverview from '../components/content/Home';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import FourKImage from '../assets/images/exampleImage.jpg'


export default function Home() {
  const {t} = useTranslation()
  return (
    <Page theme={lightTheme} meta={{title: t('home:metaTitle'), description: t('home:metaDescription')}}>
      <HomeOverview />
      <h1>Images</h1>
      <a href='https://nextjs.org/docs/api-reference/next/image' target={'__blank'}>Link to docs</a>
      <Image src={FourKImage} />
      <Image src={FourKImage} width={500} height={500} />
      <Image src={FourKImage} quality={100} placeholder={'blur'} />
    </Page>
  )
}
