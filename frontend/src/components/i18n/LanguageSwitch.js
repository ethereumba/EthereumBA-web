import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// Dates FOrmatting
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';

// i18n
import { useTranslation } from 'react-i18next';

/* Components */
import './languageSwitch.scss';

const LanguageSwitch = () => {
  // Hooks
  const { t, i18n } = useTranslation();
  const options = [
    { value: 'en', label: `🇺🇸🇬🇧 ${t('en')}`, className: 'option-class' },
    { value: 'es', label: `🇦🇷🇪🇸 ${t('es')}`, className: 'option-class' },
    { value: 'pt', label: `🇧🇷🇵🇹 ${t('pt')}`, className: 'option-class' },
  ];

  const getIdx = language => {
    const index = options.findIndex(element => element.value === language);
    return index >= 0 ? index : 0;
  };

  const [languageIndex, setLanguageIndex] = useState(getIdx(i18n.language));

  const changeLanguage = async code => {
    dayjs.locale(code.value);
    await i18n.changeLanguage(code.value);
    setLanguageIndex(getIdx(code.value));
  };

  return (
    <div className="drop-container">
      <Dropdown
        options={options}
        onChange={changeLanguage}
        value={options[languageIndex]}
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
