import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

const Paragraph = () => {
  // Hooks
  const { t } = useTranslation();

  return (
    <div className="social">
      <div className="community__header">
        <div className="sub-title">
          <h1>{t('learn')}</h1>
        </div>

        <div className="center">
          <p className="title-2">{t('about')}</p>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
