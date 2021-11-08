import i18next from 'i18next';

// TODO: hacer una constante con todos los datos requeridos

export const NAME_FIELDS = [
  {
    name: 'name',
    label: i18next.t('UserDataForm:name')
  },
  {
    name: 'lastName',
    label: i18next.t('UserDataForm:lastName')
  }
];

export const CONTACT_FIELDS = [
  {
    name: 'email',
    label: i18next.t('UserDataForm:email')
  },
  {
    name: 'telephone',
    label: i18next.t('UserDataForm:telephone')
  }
];

export const INITIAL_VALUES = {
  [NAME_FIELDS.NAME]: '',
  [NAME_FIELDS.LASTNAME]: '',
  [CONTACT_FIELDS.MAIL]: '',
  [CONTACT_FIELDS.TELEPHONE]: ''
};

export const ID_TYPES = ['nationalID', 'passport'];
export const NOTIFICATION_METHODS = ['whatsapp', 'email', 'textMessage'];
