import i18next from 'i18next';

i18next.addResources('es', 'UserDataForm', {
  name: 'Nombre',
  lastName: 'Apellido',
  dateOfBirth: 'Fecha de nacimiento',
  idType: 'Tipo de documento',
  nationalId: 'DNI',
  passport: 'Pasaporte',
  idNumber: 'Número de documento',
  email: 'Mail',
  telephone: 'Teléfono',
  notificationMethod: 'Forma de notificación',
  whatsapp: 'Whatsapp',
  textMessage: 'SMS',
  next: 'Siguiente'
});

i18next.addResources('es', 'UserDataFormErrors', {
  required: 'Requerido'
});
