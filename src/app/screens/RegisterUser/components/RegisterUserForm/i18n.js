import i18next from 'i18next';

i18next.addResources('es', 'RegisterUserForm', {
  name: 'Nombre de Usuario',
  password: 'Contraseña',
  passwordConfirmation: 'Repetir contraseña',
  register: 'Siguiente'
});

i18next.addResources('es', 'RegisterUserFormErrors', {
  required: 'Requerido',
  passwordConfirmation: 'Las contraseñas deben coincidir',
  passwordStrength: 'La contraseña debe contener como mínimo una letra mayúscula y un número',
  passwordMinimumLength: 'La contraseña debe tener como mínimo 8 caracteres'
});
