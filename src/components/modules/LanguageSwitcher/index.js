import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import i18n from '../../../internationalization/pages/services/i18n';
import * as S from './style';


export default function LanguageSwitcher() {
  const intl = useIntl();

  const router = useRouter();

  function changeLocale(nextLocale) {

    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }

  const handleLanguageSwitch = (loc) => {
    console.log(loc, "LOC!!!!")

    let nextLocale = loc === 'de' ? 'de' : loc === 'en' ? 'en' : 'en';
    console.log(nextLocale, 'nextLocale!!')
    changeLocale(nextLocale);
  };

  return (
    <S.LanguageSwitcherWrapper>
      <S.SwitcherParagraph active={intl.locale === 'de'} onClick={() => handleLanguageSwitch('de')}>
        de
      </S.SwitcherParagraph>
      <S.SwitcherParagraph active={intl.locale === 'en'} onClick={() => handleLanguageSwitch('en')}>
        en
      </S.SwitcherParagraph>
    </S.LanguageSwitcherWrapper>
  );
}
