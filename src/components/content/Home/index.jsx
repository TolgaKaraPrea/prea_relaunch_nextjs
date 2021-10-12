import useTranslation from 'next-translate/useTranslation';


const HomeOverview = ({}) => {
  const {t} = useTranslation()
  return (
    <h1>{t('home:metaTitle')}</h1>
  )
}

export default HomeOverview