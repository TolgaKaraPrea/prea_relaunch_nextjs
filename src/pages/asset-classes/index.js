import Page from '../../components/modules/Page';
import { lightTheme } from '../../utils/styles/themes';
import useTranslation from 'next-translate/useTranslation';

const AssetClassesPage = () => {
  const { t } = useTranslation('asset-classes');
  return (
    <Page theme={lightTheme} meta={{ title: t('metaTitle'), description: t('metaDescription') }}>
      <p>AssetClassesPage</p>
    </Page>
  );
};

export default AssetClassesPage;
