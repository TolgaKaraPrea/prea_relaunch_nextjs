import { useIntl } from 'react-intl';
import useTranslation from 'next-translate/useTranslation';
import servicesI18n from '@internationalization/pages/services/i18n';
import { useFormatMessage } from 'src/hooks/useFormatMessage';

const HomeOverview = () => {
  const intl = useIntl();
  const { f } = useFormatMessage(intl); //react-intl
  const { t } = useTranslation(); // next-translation
  console.log(intl);
  return (
    <div>
      <h1>{t('home:metaTitle')}</h1>
      <h1>Images</h1>
      <a href="https://nextjs.org/docs/api-reference/next/image" target={'__blank'}>
        Link to docs
      </a>

      <p>{f(servicesI18n.title)}</p>
      <button aria-label="Submit Button">{f(servicesI18n.submit)}</button>
    </div>
  );
};

export default HomeOverview;
