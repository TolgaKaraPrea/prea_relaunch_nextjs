

import React, { useEffect } from 'react';
import {useIntl} from 'react-intl'
import i18n from '../../../../internationalization/pages/services/i18n'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';

 export default function LanguageSwitcher() {
    const intl = useIntl();

    console.log(intl.formatMessage(i18n.test), "TEST")
 
    console.log(useRouter(), "useRouter()")
    const {locale } = useRouter(); 
    const router = useRouter()

    useEffect(() => {
        console.log(locale, "locale")
      }, [locale]);

      function changeLocale (nextLocale) {
          console.log(router)
          console.log(nextLocale, 'local NEW')
          const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: nextLocale })
      }

      const handleLanguageSwitch = (lang) => {
          console.log('handleLanguageSwitch', lang)
        
        

        if (lang === 'de') {
            console.log("HERE ON DE")
            changeLocale(lang);
          }
          if (lang === 'en') {
              console.log("HERE ON EN")
            changeLocale(lang);
          }
      };


 
   return (
     <dev>
       <p active={locale === 'de'} onClick={() => handleLanguageSwitch('de')}>
         de
       </p>
       <p active={locale === 'en'} onClick={() => handleLanguageSwitch('en')}>
         en
       </p>
     </dev>
   );
 }

