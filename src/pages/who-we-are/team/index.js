import useTranslation from 'next-translate/useTranslation';
import Page from '../../../components/modules/Page';
import { lightTheme } from '../../../utils/styles/themes';

const TeamPage = () => {
  const { t } = useTranslation();

  return (
    <Page
      theme={lightTheme}
      meta={{ title: t('home:metaTitle'), description: t('home:metaDescription') }}
    >
      <p>TeamPage</p>
    </Page>
  );
};

export default TeamPage;
