import useTranslation from 'next-translate/useTranslation';
import LanguageSwitcher from '../../modules/LanguageSwitcher';
// import Image from 'next/image';
// import FourKImage from '../../../assets/images/exampleImage.jpg';


const HomeOverview = ({}) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home:metaTitle')}</h1>
      <h1>Images</h1>
      <a href='https://nextjs.org/docs/api-reference/next/image' target={'__blank'}>Link to docs</a>
      <LanguageSwitcher/>
      {/* <Image src={FourKImage} />
      <Image src={FourKImage} width={500} height={500} />
      <Image src={FourKImage} quality={100} placeholder={'blur'} /> */}
    </div>
  );
};

export default HomeOverview;
