import i18next from 'i18next';

i18next.addResources('es', 'UserDataForm', {
  title: 'Paso 1',
  name: 'Nombre',
  lastName: 'Apellido',
  dateOfBirth: 'Fecha de nacimiento',
  idType: 'Tipo de documento',
  id: 'Número de documento',
  nationalId: 'DNI',
  passport: 'Pasaporte',
  idNumber: 'Número de documento',
  email: 'Mail',
  phone: 'Teléfono',
  notificationMethod: 'Forma de notificación',
  whatsapp: 'Whatsapp',
  textMessage: 'SMS',
  next: 'Siguiente',
  yes: 'Sí',
  no: 'No',
  finish: 'Finalizar registro',
  favouriteContact: 'Es contacto preferido'
});

i18next.addResources('es', 'UserDataFormErrors', {
  required: 'Requerido'
});
