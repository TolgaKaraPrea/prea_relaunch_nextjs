import { useIntl, defineMessages } from 'react-intl';
import useTranslation from 'next-translate/useTranslation';
import i18n from 'src/internationalization/pages/services/i18n';

const HomeOverview = ({}) => {
  const { t } = useTranslation();
  const intl = useIntl();

  console.log(intl, 'INTL');
  console.log(intl.formatMessage(i18n.submit), 'ggggggggggg');

  return (
    <div>
      <h1>{t('home:metaTitle')}</h1>
      <h1>Images</h1>
      <a href="https://nextjs.org/docs/api-reference/next/image" target={'__blank'}>
        Link to docs
      </a>

      <p>{intl.formatMessage(i18n.submit)}</p>
      <p>{intl.formatMessage(i18n.title)}</p>
      {/* <button aria-label='Submit Button'>
        {intl.formatMessage({
          id: 'j.submit',
          defaultMessage: 'Submit Button'
        })}
      </button> */}
    </div>
  );
};

export default HomeOverview;
