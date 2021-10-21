import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import * as S from './style';

export default function LanguageSwitcher() {
  const intl = useIntl();
  const router = useRouter();

  const handleLanguageSwitch = loc => {
    let nextLocale = loc === 'en' ? 'en' : 'de';
    changeLocale(nextLocale);
  };

  function changeLocale(nextLocale) {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }

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
