import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// i18n
import { useTranslation } from 'react-i18next';

/* Components */
import './languageSwitch.scss';

const LanguageSwitch = () => {
  // Hooks
  const { t, i18n } = useTranslation();
  const options = [
    { value: 'en', label: `${t('translation:en')} 🇺🇸🇬🇧`, className: 'option-class' },
    { value: 'es', label: `${t('translation:es')} 🇦🇷🇪🇸`, className: 'option-class' },
    { value: 'pt', label: `${t('translation:pt')} 🇧🇷🇵🇹`, className: 'option-class' },
  ];
  const [language, setLanguage] = useState(i18n.language || options[0]);

  const changeLanguage = code => {
    setLanguage(code);
    i18n.changeLanguage(code.value);
  };

  return (
    <div className="drop-container">
      <Dropdown
        options={options}
        onChange={changeLanguage}
        value={language}
        menuClassName="menu-class"
        controlClassName="drop-down"
        arrowClosed={<span className="arrow-closed" />}
        arrowOpen={<span className="arrow-open" />}
      />
    </div>
  );
};

export default LanguageSwitch;

LanguageSwitch.propTypes = {};
