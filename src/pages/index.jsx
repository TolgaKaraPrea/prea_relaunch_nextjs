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
    </Page>
  )
}
