import i18next from 'i18next';

export const getPersonInfo = (name, surname, dni) => [
  { title: i18next.t('PersonCommon:name'), info: name },
  { title: i18next.t('PersonCommon:surname'), info: surname },
  { title: i18next.t('PersonCommon:dni'), info: dni }
];
